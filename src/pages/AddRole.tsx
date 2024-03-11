import { useForm } from 'react-hook-form';
import Button from '../components/Utility/Button';
import Checkbox from '../components/Utility/Checkbox';
import { convertToSlug, permissions } from '../lib/utils';

interface FormData {
  [key: string]: boolean | string;
}

const AddRole = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-10">
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Role Name
          </label>
          <input
            {...register('role_name')}
            type="text"
            placeholder="Enter role name"
            className="custom-input"
          />
        </div>
        <div className="">
          {permissions.map((group) => (
            <div
              key={group.name}
              className="max-w-xl flex justify-between my-8"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium">{group.name}</h3>
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-start">
                {group.permissionsGroup.map((permission) => {
                  const isChecked = watch(convertToSlug(permission, '_'));
                  return (
                    <Checkbox
                      key={permission}
                      label={permission}
                      register={register}
                      isChecked={isChecked}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default AddRole;
