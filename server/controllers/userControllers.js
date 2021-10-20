import jwt from 'jsonwebtoken';
import speakeasy from 'speakeasy';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import {
  generateActivationToken,
  generateIdToken,
} from '../utils/token/index.js';
import { isProduction } from '../utils/index.js';

export const register = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Generate 2FA Secret
  const otp_secret = speakeasy.generateSecret({ name: '2FA Authentication' });

  // Generate OTP Code for first time
  const otp = speakeasy.totp({
    secret: otp_secret.base32,
    encoding: 'base32',
    step: 900,
  });

  const options = {
    expires: new Date(Date.now() + 15 * 60 * 1000),
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
  };

  // find existing user
  const userExists = await User.findOne({ email });

  if (userExists) {
    // Check if user is already verified
    if (userExists.verified) {
      const options = {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 Days
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'strict' : 'lax',
      };

      return res
        .status(200)
        .cookie('_2fa_token', generateIdToken(userExists._id), options)
        .json({ message: 'User already verified' });
    }

    // Generate OTP Code based on user otp_secret

    const otp = speakeasy.totp({
      secret: userExists.otp_secret.base32,
      encoding: 'base32',
      step: 900,
    });

    return res
      .status(201)
      .cookie(
        '_2fa_activation_token',
        generateActivationToken(userExists._id),
        options
      )
      .json({ otp });
  }

  // Create new user
  const user = await User.create({ ...req.body, otp_secret });

  if (user) {
    res
      .status(201)
      .cookie(
        '_2fa_activation_token',
        generateActivationToken(user._id),
        options
      )
      .json({
        otp,
      });
  }
});

export const registerVerify = asyncHandler(async (req, res) => {
  // get token from cookies
  const token = req.cookies['_2fa_activation_token'];

  // cookies options
  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 Days
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
  };

  // check if token not found
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, token failed');
  }

  const { id } = jwt.verify(token, process.env.JWT_SECRET);

  // find existing user
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // check if user already verified
  if (user.verified) {
    return res
      .status(201)
      .cookie('_2fa_token', generateIdToken(user._id), options)
      .json({ message: 'User already verified' });
  }

  // verify the otp code
  const verified = speakeasy.totp.verify({
    secret: user.otp_secret.base32,
    encoding: 'base32',
    token: req.body.otp,
    step: 900,
    // window: 1,
  });

  if (!verified) {
    res.status(400);
    throw new Error('Invalid OTP Code');
  }

  user.verified = verified;

  const updatedUser = await user.save();

  if (updatedUser) {
    res
      .status(201)
      .cookie('_2fa_token', generateIdToken(updatedUser._id), options)
      .json({ verified, otp });
  }
});

