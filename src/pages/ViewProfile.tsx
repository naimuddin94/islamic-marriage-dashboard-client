import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { FaPhoneAlt, FaSkype } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import CoverOne from '../images/cover/cover-01.png';
import defaultUser from '../images/user/default_user.jpg';
import { useParams } from 'react-router-dom';

const ViewProfile = () => {
  const params = useParams();

  return (
    <div>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3 overflow-hidden">
            <div className="relative drop-shadow-2 w-full h-full">
              <img
                src={defaultUser}
                alt="profile"
                className="object-cover w-full h-full scale-125"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              MD Naim Uddin
            </h3>
            <p className="font-medium">Admin</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129K
                </span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi iure repellendus recusandae deserunt a consequatur distinctio nobis praesentium consequuntur aperiam delectus dolorum doloribus, ipsam voluptate culpa quis dolor quibusdam!</p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Contact With Me
              </h4>
              <div className="flex items-center justify-center gap-3.5">
                <a
                  target="_blank"
                  href={'#'}
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <FaSkype size={22} />
                </a>
                <a
                  target="_blank"
                  href={'#'}
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <IoIosMail size={24} />
                </a>
                <a
                  target="_blank"
                  href={'#'}
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <FaPhoneAlt size={18} />
                </a>
                <a
                  target="_blank"
                  href={`https://wa.me/${'#'}`}
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <RiWhatsappFill size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
