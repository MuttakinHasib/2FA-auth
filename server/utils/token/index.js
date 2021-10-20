import jwt from 'jsonwebtoken';

/**
 * @param  {String} id
 */
export const generateTangoToken = payload => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });
};

/**
 * @param  {String} id
 */
export const generateActivationToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '15m' });
};

/**
 * @param  {String} id
 */
export const generateIdToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

/**
 * @param  {String} id
 */
export const resetPasswordIdToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5m' });
};
