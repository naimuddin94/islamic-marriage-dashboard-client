import { useLoaderData } from 'react-router-dom';
import LeaderForm from '../../components/Leader/LeaderForm';
import { ILeader } from '../../types/types';

const UpdateLeader = () => {
  const leader = useLoaderData() as ILeader;
  return (
    <div>
      <LeaderForm leader={leader} />
    </div>
  );
};

export default UpdateLeader;
