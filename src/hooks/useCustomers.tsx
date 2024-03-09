import { useQuery } from '@tanstack/react-query';
import { axiosBase } from './useAxiosSecure';

const useCustomers = () => {
  const {
    data: customers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const res = await axiosBase.get('/customers');
      return res.data;
    },
  });
  return { customers, isLoading, refetch };
};

export default useCustomers;
