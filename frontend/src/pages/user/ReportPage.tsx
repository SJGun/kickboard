import React, { useEffect, useState } from 'react';
import { useStateStore } from '../../store/StateStore';

const ReportPage: React.FC = () => {
  const { title, setTitle, setReport } = useStateStore();
  const [isModel, setIsModel] = useState(false);
  const toggleModel = () => {
    setIsModel(!isModel);
  };

  useEffect(() => {
    setTitle('전동 킥보드 주정차 위반 신고');
    setReport();
  }, [title, setTitle]);

  console.log(isModel);

  return (
    <>
      {/* 본문 */}
      <div
        className={
          'flex flex-col items-center justify-center gap-2' +
          ' ' +
          (isModel ? 'hidden' : 'bg-blue-300')
        }
      >
        <p className="border border-black px-4 py-2 font-bold">
          주소 광산구 댜추나려트베호asefsaefas
        </p>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={toggleModel}
        >
          위치 확인
        </button>
      </div>
    </>
  );
};

export default ReportPage;
