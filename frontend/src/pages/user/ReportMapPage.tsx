import React, { useEffect, useState } from 'react';
import { useStateStore } from '../../store/StateStore';

const ReportMapPage: React.FC = () => {
  const { title, setTitle } = useStateStore();

  useEffect(() => {
    setTitle('위치 확인');
  }, [title, setTitle]);

  return (
    <>
      <div className={'flex flex-col items-center justify-center gap-2'}>
        <p className="border border-black px-4 py-2 font-bold">지도</p>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          지도
        </button>
      </div>
    </>
  );
};

export default ReportMapPage;
