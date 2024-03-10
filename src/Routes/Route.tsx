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
        path: '/payments/stripe-payment',
        element: <div>Stipe order page</div>,
      },
      {
        path: '/payments/paypal-payment',
        element: <div>Paypal payment page</div>,
      },
      {
        path: '/payments/pending-zelle-payment',
        element: <div>Pending Zelle Payment</div>,
      },
      {
        path: '/payments/completed-zelle-payment',
        element: <div>Completed Zelle Payment</div>,
      },
      {
        path: '/bkash-payment/bkash-payment',
        element: <div>Bkash payment page</div>,
      },
      {
        path: '/support/pending-support',
        element: <div>Pending Support page</div>,
      },
      {
        path: '/support/completed-support',
        element: <div>Completed Support page</div>,
      },
      {
        path: '/orders/pending-orders-list',
        element: <div>Pending Order List</div>,
      },
      {
        path: '/orders/completed-orders-list',
        element: <div>Completed Order List</div>,
      },
      {
        path: '/orders/returned-orders-list',
        element: <div>Returned Order List</div>,
      },
      {
        path: '/order-payment/paypal-order-payment',
        element: <div>Paypal Order Payments</div>,
      },
      {
        path: '/order-payment/stripe-order-payment',
        element: <div>Stripe Order Payments</div>,
      },
      {
        path: '/massages/unread-massages',
        element: <div>Unread massages page</div>,
      },
      {
        path: '/massages/read-massages',
        element: <div>Read massages page</div>,
      },
      {
        path: '/contact-request/uncheck-request',
        element: <div>This is unchecked request page</div>,
      },
      {
        path: '/contact-request/all-request',
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
