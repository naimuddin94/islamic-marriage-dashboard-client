import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <img src="/notFound.gif" alt="" className="-mb-16 md:-mb-40" />
      <button onClick={() => navigate('/')} className="flex items-center gap-2 px-6 py-2 rounded-xl bg-lime-200">
        <AiOutlineArrowLeft className="text-lg" />
        Go back
      </button>
      <h1 className="text-2xl font-semibold text-slate-600">
        Oops page not found!
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default NotFound;
