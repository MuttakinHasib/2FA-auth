import axios from 'axios';

export const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

app.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);
