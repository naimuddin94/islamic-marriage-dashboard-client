import { useLoaderData } from 'react-router-dom';
import { ICountry } from '../../types/types';
import AddCountry from '../../components/Country/AddCountry';

const UpdateCountry = () => {
  const country = useLoaderData() as ICountry;
  return (
    <div>
      <AddCountry country={country} />
    </div>
  );
};

export default UpdateCountry;
