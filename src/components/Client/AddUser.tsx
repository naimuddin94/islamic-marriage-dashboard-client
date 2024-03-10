import Breadcrumb from "../Breadcrumbs/Breadcrumb";


const AddUser = () => {
    return (
      <>
        <Breadcrumb pageName={'Create Client'} />

        <form>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter client first name"
                  className="custom-input"
                  required
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Whatsapp
                </label>
                <input
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
                  name="skype"
                  type="text"
                  placeholder="Enter skype id"
                  className="custom-input"
                />
              </div>
            </div>
          </div>
        </form>
      </>
    );
};

export default AddUser;