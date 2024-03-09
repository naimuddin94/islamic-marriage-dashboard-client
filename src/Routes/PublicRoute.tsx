import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';
import { ReactNode } from 'react';
import Loader from '../common/Loader';

interface IPublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: IPublicRouteProps) => {
  const { roleLoading, user, loading } = useAuthInfo();

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

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default PublicRoute;
