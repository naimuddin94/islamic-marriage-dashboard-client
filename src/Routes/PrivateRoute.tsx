import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';
import { ReactNode } from 'react';
import Loader from '../common/Loader';

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
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
    return children;
  }
  
  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
