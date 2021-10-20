import { app } from '@api/axios';

export const attemptRegister = async payload => {
  try {
    const { data } = await app.post(`/users/register`, payload);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const attemptVerify = async payload => {
  try {
    const { data } = await app.post(`/users/register/verify`, payload);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
