import { useQuery } from '@tanstack/react-query';
import { axiosBase } from './useAxiosSecure';

const useCountries = () => {
  const {
    data: countries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const res = await axiosBase.get('/country');
      return res.data;
    },
  });
  return { countries, isLoading, refetch };
};

export default useCountries;
