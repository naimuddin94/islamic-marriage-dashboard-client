import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import useCountries from '../../hooks/useCountries';
import CountryTable from './CountryTable';

const ManageCountry = () => {
  const { countries, refetch } = useCountries();
  return (
    <>
      <Breadcrumb pageName="All Country" />

      <div className="flex flex-col gap-10">
        <CountryTable countries={countries} refetch={refetch} />
      </div>
    </>
  );
};

export default ManageCountry;
