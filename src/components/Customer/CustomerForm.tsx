import { FaEdit, FaPlus } from 'react-icons/fa';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import Button from '../Utility/Button';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiCrystalGrowth } from 'react-icons/gi';
import { FormEvent, useState } from 'react';
import imageUpload from '../../lib/imageUpload';
import { axiosBase } from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useLeaders from '../../hooks/useLeaders';
import { ICustomerForm, ILeader } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const CustomerForm = ({ customer }: ICustomerForm) => {
  const [submitting, setSubmitting] = useState(false);
  const { leaders } = useLeaders() as { leaders: ILeader[] };
  const navigate = useNavigate();

  const leadersOptions = leaders?.map((leader) => {
    const name = leader.firstName + ' ' + leader.lastName;
    return name;
  });

  const statusOptions = ['Active', 'Pending'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const whatsapp = form.whatsapp.value;
    const skype = form.skype.value;
    const photoFile = form.photo.files[0];
    const NIDCopyFile = form.NIDCopy.files[0];
    const country = form.country.value;
    const city = form.city.value;
    const state = form.state.value;
    const fullAddress = form.fullAddress.value;
    const nidNumber = form.nidNumber.value;
    const email = form.email.value;
    const password = form.password.value;
    const addedBy = form.addedBy.value;
    const status = form.status.value;

    const photo = await imageUpload(photoFile);
    const NIDCopy = await imageUpload(NIDCopyFile);

    const newCustomer = {
      firstName,
      lastName,
      phoneNumber,
      whatsapp,
      skype,
      photo,
      NIDCopy,
      country,
      city,
      state,
      fullAddress,
      nidNumber,
      email,
      password,
      addedBy,
      status,
    };

    const newUser = {
      name: `${firstName} ${lastName}`,
      email,
      role: 'customer',
    };

    if (customer) {
      axiosBase
        .put(`/customers/update/${customer._id}`, newCustomer)
        .then((response) => {
          navigate('/manage-customers');
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
        .post('/customers/create', newCustomer)
        .then((response) => {
          axiosBase
            .post('/users/create', newUser)
            .then(() => {
              toast.success(response?.data?.message);
              form.reset();
            })
            .catch((err) => console.log(err.message));
        })
        .catch((err) => {
          toast.error(err?.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <>
      <Breadcrumb pageName={customer ? 'Update Customer' : 'Add Customer'} />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Identity Input --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">Name</h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    First Name
                  </label>
                  <input
                    defaultValue={customer ? customer.firstName : ''}
                    name="firstName"
                    type="text"
                    placeholder="Enter first name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Last Name
                  </label>
                  <input
                    defaultValue={customer ? customer.lastName : ''}
                    name="lastName"
                    type="text"
                    placeholder="Enter last name here"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Contact
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Phone Number
                  </label>
                  <input
                    defaultValue={customer ? customer.phoneNumber : ''}
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone number with country code"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Whatsapp
                  </label>
                  <input
                    defaultValue={customer ? customer.whatsapp : ''}
                    name="whatsapp"
                    type="text"
                    placeholder="Enter whatsapp id"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Skype
                  </label>
                  <input
                    defaultValue={customer ? customer.skype : ''}
                    name="skype"
                    type="text"
                    placeholder="Enter skype id"
                    className="custom-input"
                  />
                </div>
              </div>
            </div>

            {/* <!-- File upload --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  File upload
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Photo
                  </label>
                  <input
                    name="photo"
                    type="file"
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    NID Copy
                  </label>
                  <input
                    name="NIDCopy"
                    type="file"
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Address
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Country
                  </label>
                  <input
                    defaultValue={customer ? customer.country : ''}
                    name="country"
                    type="text"
                    placeholder="Enter country name here"
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    City
                  </label>
                  <input
                    defaultValue={customer ? customer.city : ''}
                    name="city"
                    type="text"
                    placeholder="Enter city name here"
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    State
                  </label>
                  <input
                    defaultValue={customer ? customer.state : ''}
                    name="state"
                    type="text"
                    placeholder="Enter state here"
                    className="custom-input"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Full Address
                  </label>
                  <input
                    defaultValue={customer ? customer.fullAddress : ''}
                    name="fullAddress"
                    type="text"
                    placeholder="Enter full address here"
                    className="custom-input"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Identity
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    National ID
                  </label>
                  <input
                    defaultValue={customer ? customer.nidNumber : ''}
                    name="nidNumber"
                    type="text"
                    placeholder="Enter national identity number"
                    className="custom-input"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Authentication
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    User Email
                  </label>
                  <input
                    defaultValue={customer ? customer.email : ''}
                    name="email"
                    type="text"
                    placeholder="example@mail.com"
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    defaultValue={customer ? customer.password : ''}
                    name="password"
                    type="text"
                    placeholder="***************"
                    className="custom-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Select input --> */}
          <div className="col-span-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Select input
              </h3>
            </div>
            <div className="flex justify-between gap-9 p-6.5">
              <SelectGroupTwo
                defaultOption={customer?.addedBy}
                name="addedBy"
                label="Added By"
                options={leadersOptions}
                icon={MdOutlineAdminPanelSettings}
              />
              <SelectGroupTwo
                defaultOption={customer?.status}
                name="status"
                label="Status"
                options={statusOptions}
                icon={GiCrystalGrowth}
              />
            </div>
          </div>
          <div>
            <Button disabled={submitting} icon={customer ? FaEdit : FaPlus}>
              {customer ? 'Update Customer' : 'Add Customer'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CustomerForm;
