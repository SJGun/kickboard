import React from 'react';
import { Link } from 'react-router-dom';

const Location: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="border border-black px-4 py-2 font-bold">
          주소 광산구 댜추나려트베호asefsaefas
        </p>
        <Link
          to="/map"
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          위치 확인
        </Link>
      </div>
    </>
  );
};

export default Location;
