import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import LeaderForm from './components/Leader/LeaderForm';
import ManageLeader from './components/Leader/ManageLeader';
import CustomerForm from './components/Customer/CustomerForm';
import ManageCustomer from './components/Customer/ManageCustomer';
import AddCountry from './components/Country/AddCountry';
import ManageCountry from './components/Country/ManageCountry';
import AddCategory from './components/Category/AddCategory';
import ManageCategory from './components/Category/ManageCategory';
import SigninPage from './pages/SigninPage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Softronixs" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/add-leader"
          element={
            <>
              <PageTitle title="Softronixs | Add Leader" />
              <LeaderForm />
            </>
          }
        />
        <Route
          path="/manage-leader"
          element={
            <>
              <PageTitle title="Softronixs | Manage Leader" />
              <ManageLeader />
            </>
          }
        />
        <Route
          path="/add-customer"
          element={
            <>
              <PageTitle title="Softronixs | Add Customer" />
              <CustomerForm />
            </>
          }
        />
        <Route
          path="/manage-customers"
          element={
            <>
              <PageTitle title="Softronixs | Manage Customer" />
              <ManageCustomer />
            </>
          }
        />
        <Route
          path="/add-country"
          element={
            <>
              <PageTitle title="Softronixs | Add Country" />
              <AddCountry />
            </>
          }
        />
        <Route
          path="/manage-country"
          element={
            <>
              <PageTitle title="Softronixs | Manage Country" />
              <ManageCountry />
            </>
          }
        />
        <Route
          path="/add-category"
          element={
            <>
              <PageTitle title="Softronixs | Add Category" />
              <AddCategory />
            </>
          }
        />
        <Route
          path="/manage-category"
          element={
            <>
              <PageTitle title="Softronixs | Manage Category" />
              <ManageCategory />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Softronixs" />
              <Settings />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Softronixs" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Softronixs" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/webhook-settings"
          element={
            <>
              <PageTitle title="Chart | Softronixs" />
              <Chart />
            </>
          }
        />
        <Route
          path="/leader-report"
          element={
            <>
              <PageTitle title="Chart | Softronixs" />
              <Chart />
            </>
          }
        />
        <Route
          path="/customers-report"
          element={
            <>
              <PageTitle title="Chart | Softronixs" />
              <Chart />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Softronixs" />
              <SigninPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
