import { GiCheckMark } from 'react-icons/gi';
import Button from '../Utility/Button';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { CiTimer } from 'react-icons/ci';
import SelectGroupOne from '../Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { FormEvent, useEffect, useState } from 'react';
import {
  IAddCategoryProps,
  ICountry,
  ICountryPriceList,
} from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { axiosBase } from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';

const timeOptions = [
  '10 minutes',
  '20 minutes',
  '30 minutes',
  '40 minutes',
  '50 minutes',
  '60 minutes',
];

const AddCategory = ({ category }: IAddCategoryProps) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    axiosBase.get('/country').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const name = form.category_name.value;
    const time = form.time.value;

    const countryPriceList: ICountryPriceList[] = [];

    countries?.forEach((country) => {
      const price = parseFloat(form[`${country.name}_price`].value);
      const status = form[`${country.name}_status`].value;
      countryPriceList.push({ country: country.name, price, status });
    });

    const newCategory = { name, time, countryPriceList };

    if (category) {
      axiosBase
        .put(`/category/update/${category._id}`, newCategory)
        .then((response) => {
          navigate('/manage-category');
          form.reset();
          toast.success(response?.data?.message);
        })
        .catch((err) => {
          toast.error(err.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    } else {
      axiosBase
        .post('/category/create', newCategory)
        .then((response) => {
          form.reset();
          toast.success(response?.data?.message);
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => setSubmitting(false));
    }
  };

  return (
    <>
      <Breadcrumb pageName={category ? 'Update Category' : 'Add Category'} />
      <form onSubmit={handleSubmit}>
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              ➕ Category
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Name
              </label>
              <input
                defaultValue={category ? category.name : ''}
                name="category_name"
                type="text"
                placeholder="Category name"
                className="custom-input"
              />
            </div>
            <div>
              <SelectGroupTwo
                defaultOption={category?.time}
                name="time"
                label="Time"
                icon={CiTimer}
                options={timeOptions}
              />
            </div>
            <div>
              {category
                ? category?.countryPriceList?.map((country, index) => (
                    <div key={index} className="flex gap-5">
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <input
                          defaultValue={country.country}
                          type="text"
                          value={country.country}
                          className="custom-input"
                          disabled
                        />
                      </div>
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <input
                          defaultValue={country.price}
                          name={`${country.country}_price`}
                          type="number"
                          placeholder="Price"
                          className="custom-input"
                        />
                      </div>
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <SelectGroupOne
                          defaultValue={country.status}
                          name={`${country.country}_status`}
                        />
                      </div>
                    </div>
                  ))
                : countries &&
                  countries.map((country) => (
                    <div key={country._id} className="flex gap-5">
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <input
                          type="text"
                          value={country.name}
                          className="custom-input"
                          disabled
                        />
                      </div>
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <input
                          name={`${country.name}_price`}
                          type="number"
                          placeholder="Price"
                          className="custom-input"
                        />
                      </div>
                      {/* <!-- Input Fields --> */}
                      <div className="flex-1">
                        <SelectGroupOne name={`${country.name}_status`} />
                      </div>
                    </div>
                  ))}
            </div>
            <div>
              <Button
                disabled={submitting}
                icon={category ? FaEdit : GiCheckMark}
              >
                {category ? 'Update' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCategory;
