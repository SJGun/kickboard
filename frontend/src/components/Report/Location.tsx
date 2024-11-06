import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReportStore } from '../../store/ReportInfoStore';

const Location: React.FC = () => {
  const { location, setLocation } = useReportStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          className="my-border px-4 py-2 font-bold"
          onChange={handleChange}
          value={location}
          disabled
        />

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
function ReportInfoStore(): { Location: any } {
  throw new Error('Function not implemented.');
}
