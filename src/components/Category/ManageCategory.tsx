import useCategories from '../../hooks/useCategories';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import CategoryTable from './CategoryTable';

const ManageCategory = () => {
  const { categories, refetch } = useCategories();
  return (
    <>
      <Breadcrumb pageName="All Categories" />
      <div className="flex flex-col gap-10">
        <CategoryTable categories={categories} refetch={refetch} />
      </div>
    </>
  );
};

export default ManageCategory;
