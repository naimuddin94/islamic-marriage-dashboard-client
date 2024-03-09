import { useLoaderData } from 'react-router-dom';
import { ICategory } from '../../types/types';
import AddCategory from '../../components/Category/AddCategory';

const UpdateCategory = () => {
  const category = useLoaderData() as ICategory;
  console.log(category);
  return (
    <div>
      <AddCategory category={category} />
    </div>
  );
};

export default UpdateCategory;
