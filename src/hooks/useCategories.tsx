import { useQuery } from '@tanstack/react-query';
import { axiosBase } from './useAxiosSecure';

const useCategories = () => {
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axiosBase.get('/category');
      return res.data;
    },
  });
  return { categories, isLoading, refetch };
};

export default useCategories;
