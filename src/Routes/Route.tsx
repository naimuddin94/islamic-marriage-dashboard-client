import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ViewProfile from '../pages/ViewProfile';
import Home from '../pages/Home';
import AddUser from '../components/Client/AddUser';
import ClientList from '../components/Client/ClientList';
import AddRole from '../pages/AddRole';
import ManageRole from '../pages/ManageRole';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/client/add-user',
        element: <AddUser />,
      },
      {
        path: '/client/user-list',
        element: <ClientList />,
      },
      {
        path: '/role-management/add-role',
        element: <AddRole />,
      },
      {
        path: '/role-management/manage-role',
        element: <ManageRole />,
      },
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
]);

export default router;
