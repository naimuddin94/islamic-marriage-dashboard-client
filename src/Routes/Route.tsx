import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import SigninPage from '../pages/SigninPage';
import ECommerce from '../pages/Dashboard/ECommerce';
import LeaderForm from '../components/Leader/LeaderForm';
import ManageLeader from '../components/Leader/ManageLeader';
import CustomerForm from '../components/Customer/CustomerForm';
import ManageCustomer from '../components/Customer/ManageCustomer';
import Chart from '../pages/Chart';
import AddCountry from '../components/Country/AddCountry';
import ManageCountry from '../components/Country/ManageCountry';
import AddCategory from '../components/Category/AddCategory';
import ManageCategory from '../components/Category/ManageCategory';
import Settings from '../pages/Settings';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import { axiosBase } from '../hooks/useAxiosSecure';
import UpdateLeader from '../pages/update/UpdateLeader';
import UpdateCustomer from '../pages/update/UpdateCustomer';
import UpdateCountry from '../pages/update/UpdateCountry';
import UpdateCategory from '../pages/update/UpdateCategory';
import ProtectRoute from './ProtectRoute';
import PublicRoute from './PublicRoute';
import Profile from '../pages/Profile';
import ViewProfile from '../pages/ViewProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: '/massages/unread-massages',
        element: <div>Unread massages page</div>,
      },
      {
        path: '/massages/read-massages',
        element: <div>Read massages page</div>,
      },
      {
        path: '/contact/uncheck-request',
        element: <div>This is unchecked request page</div>,
      },
      {
        path: '/contact/all-request',
        element: <div>All requests page </div>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/view-profile/:email',
        element: <ViewProfile />,
      },
    ],
  },
  {
    path: '/signin',
    element: (
      <PublicRoute>
        <SigninPage />
      </PublicRoute>
    ),
  },
]);

export default router;
