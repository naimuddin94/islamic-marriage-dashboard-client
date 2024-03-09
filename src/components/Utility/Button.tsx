import { IButtonProps } from '../../types/types';

const Button = ({ children, icon: Icon, disabled }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-primary/70 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 disabled:cursor-not-allowed disabled:bg-primary/40"
    >
      <span>
        <Icon />
      </span>
      {children}
    </button>
  );
};

export default Button;
