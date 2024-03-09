import { FaEdit, FaPlus } from 'react-icons/fa';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import Button from '../Utility/Button';
import { FormEvent, useState } from 'react';
import imageUpload from '../../lib/imageUpload';
import { axiosBase } from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { ILeaderForm } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import useAuthInfo from '../../hooks/useAuthInfo';

const LeaderForm = ({ leader }: ILeaderForm) => {
  const { createUser } = useAuthInfo();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

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

    const photo = await imageUpload(photoFile);
    const NIDCopy = await imageUpload(NIDCopyFile);

    const newLeader = {
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
    };

    const newUser = {
      name: `${firstName} ${lastName}`,
      email,
      role: 'leader',
    };

    if (leader) {
      axiosBase
        .put(`/leaders/update/${leader._id}`, newLeader)
        .then((response) => {
          navigate('/manage-leader');
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
        .post('/leaders/create', newLeader)
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
          toast.error(err.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <>
      <Breadcrumb pageName={leader ? 'Update Leader' : 'Add Leader'} />

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
                    defaultValue={leader ? leader.firstName : ''}
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
                    defaultValue={leader ? leader.lastName : ''}
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
                    defaultValue={leader ? leader.phoneNumber : ''}
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
                    defaultValue={leader ? leader.whatsapp : ''}
                    name="whatsapp"
                    type="text"
                    placeholder="Enter whatsapp id"
                    className="custom-input"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Skype
                  </label>
                  <input
                    defaultValue={leader ? leader.skype : ''}
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
                    defaultValue={leader ? leader.country : ''}
                    name="country"
                    type="text"
                    placeholder="Enter country name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    City
                  </label>
                  <input
                    defaultValue={leader ? leader.city : ''}
                    name="city"
                    type="text"
                    placeholder="Enter city name here"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    State
                  </label>
                  <input
                    defaultValue={leader ? leader.state : ''}
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
                    defaultValue={leader ? leader.fullAddress : ''}
                    name="fullAddress"
                    type="text"
                    placeholder="Enter full address here"
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
                  Identity
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    National ID
                  </label>
                  <input
                    defaultValue={leader ? leader.nidNumber : ''}
                    name="nidNumber"
                    type="text"
                    placeholder="Enter national identity number"
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
                  Authentication
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    User Email
                  </label>
                  <input
                    defaultValue={leader ? leader.email : ''}
                    name="email"
                    type="text"
                    placeholder="example@mail.com"
                    className="custom-input"
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    defaultValue={leader ? leader.password : ''}
                    name="password"
                    type="text"
                    placeholder="***************"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button disabled={submitting} icon={leader ? FaEdit : FaPlus}>
              {leader ? 'Update Leader' : 'Add Leader'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LeaderForm;
