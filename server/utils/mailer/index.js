import sgMail from '@sendgrid/mail';

import {
  activationTemplate,
  passwordResetTemplate,
  sendEmailInvitesTemplate,
} from './templates/index.js';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { EMAIL_FROM, SITE_NAME, CLIENT_URL } = process.env;

/**
 * @param  {String} name
 * @param  {String} email
 * @param  {String} url
 */

export const sendActivationEmail = async (name, email, url) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_FROM}>`,
    to: email,
    subject: `Signup to ${CLIENT_URL}`,
    html: activationTemplate(name, url),
  };

  // const result = await transport.sendMail(mailOptions);
  const result = await sgMail.send(mailOptions);
  if (!result) {
    throw new Error('Something went wrong');
  }
};

export const sendEmailInvites = async (
  emails,
  coupleName,
  image,
  message,
  from
) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_FROM}>`,
    // to: '8019197212@vtext.com',
    // to: '8019197212@vzwpix.com',
    to: emails,
    // to: 'azimaahmed36@gmail.com',
    replyTo: from,
    subject: 'BeWeddy',
    html: sendEmailInvitesTemplate(coupleName, image, message),
    // attachments: [
    //   {
    //     content: base64.replace('data:image/png;base64,', ''),
    //     filename: 'attachment.png',
    //     type: 'image/png',
    //     disposition: 'attachment',
    //   },
    // ],
  };

  // const result = await transport.sendMail(mailOptions);
  const result = await sgMail.send(mailOptions);
  if (!result) {
    throw new Error('Something went wrong');
  }
};

/**
 * @param  {String} email
 * @param  {String} url
 */

export const sendPasswordResetEmail = async (email, url) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_FROM}>`,
    to: email,
    subject: `Reset your Password for ${SITE_NAME}`,
    html: passwordResetTemplate(url),
  };
  const result = await sgMail.send(mailOptions);

  // const result = await transport.sendMail(mailOptions);

  if (!result) {
    throw new Error('Something went wrong');
  }
};
