import { useQuery } from '@tanstack/react-query';
import { axiosBase } from './useAxiosSecure';

const useLeaders = () => {
  const {
    data: leaders = [],
    isLoading,
      refetch,
  } = useQuery({
    queryKey: ['leaders'],
    queryFn: async () => {
      const res = await axiosBase.get('/leaders');
      return res.data;
    },
  });
  return { leaders, isLoading, refetch };
};

export default useLeaders;
