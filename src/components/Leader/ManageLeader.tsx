import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import LeaderTable from './LeaderTable';
import useLeaders from '../../hooks/useLeaders';

const ManageLeader = () => {
  const { leaders, refetch } = useLeaders();
  return (
    <>
      <Breadcrumb pageName="All Leaders" />

      <div className="flex flex-col gap-10">
        <LeaderTable data={leaders} refetch={refetch} />
      </div>
    </>
  );
};

export default ManageLeader;
