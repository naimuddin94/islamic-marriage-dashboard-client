import { useLoaderData } from 'react-router-dom';
import CustomerForm from '../../components/Customer/CustomerForm';
import { ICustomer } from '../../types/types';

const UpdateCustomer = () => {
  const customer = useLoaderData() as ICustomer;
  return (
    <div>
      <CustomerForm customer={customer} />
    </div>
  );
};

export default UpdateCustomer;
