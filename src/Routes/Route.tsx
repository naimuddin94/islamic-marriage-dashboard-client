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
        path: '/',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader', 'customer']}>
            <ECommerce />
          </ProtectRoute>
        ),
      },
      {
        path: '/add-leader',
        element: (
          <ProtectRoute protectedBy={['admin']}>
            <LeaderForm />
          </ProtectRoute>
        ),
      },
      {
        path: '/manage-leader',
        element: (
          <ProtectRoute protectedBy={['admin']}>
            <ManageLeader />
          </ProtectRoute>
        ),
        loader: () => axiosBase.get('/leaders'),
      },
      {
        path: '/update-leader/:email',
        element: (
          <ProtectRoute protectedBy={['admin']}>
            <UpdateLeader />
          </ProtectRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase.get(`/leaders/${params.email}`);
          return res.data;
        },
      },
      {
        path: '/add-customer',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <CustomerForm />
          </ProtectRoute>
        ),
        loader: () => axiosBase.get('/leaders'),
      },
      {
        path: 'manage-customers',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <ManageCustomer />
          </ProtectRoute>
        ),
        loader: () => axiosBase.get('/customers'),
      },
      {
        path: '/update-customer/:email',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <UpdateCustomer />
          </ProtectRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase.get(`/customers/${params.email}`);
          return res.data;
        },
      },
      {
        path: '/customer-report',
        element: <Chart />,
      },
      {
        path: '/add-country',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <AddCountry />
          </ProtectRoute>
        ),
      },
      {
        path: '/manage-country',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <ManageCountry />
          </ProtectRoute>
        ),
        loader: () => axiosBase.get('/country'),
      },
      {
        path: '/update-country/:countryId',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <UpdateCountry />
          </ProtectRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase.get(`/country/${params.countryId}`);
          return res.data;
        },
      },
      {
        path: '/add-category',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <AddCategory />
          </ProtectRoute>
        ),
      },
      {
        path: '/update-category/:categoryId',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <UpdateCategory />
          </ProtectRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase.get(`/category/${params.categoryId}`);
          return res.data;
        },
      },
      {
        path: '/manage-category',
        element: (
          <ProtectRoute protectedBy={['admin', 'leader']}>
            <ManageCategory />
          </ProtectRoute>
        ),
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/auth/signin',
        element: <SignIn />,
      },
      {
        path: '/auth/signup',
        element: <SignUp />,
      },
      {
        path: '/webhook-settings',
        element: <Chart />,
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
