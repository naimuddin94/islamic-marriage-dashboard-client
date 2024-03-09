import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';
import { ReactNode } from 'react';
import Loader from '../common/Loader';

interface IProtectRouteProps {
  children: ReactNode;
  protectedBy: string[];
}

const ProtectRoute = ({ children, protectedBy }: IProtectRouteProps) => {
  const { roleLoading, loading, role } = useAuthInfo();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  if (roleLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  if (protectedBy.includes(role)) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default ProtectRoute;
