import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:5000/api',
  // baseURL: 'https://softronixs-backend.vercel.app/api',
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosBase;
};

export default useAxiosSecure;
