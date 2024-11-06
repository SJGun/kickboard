import React, { useEffect, useState } from 'react';
import { useStateStore } from '../../store/StateStore';
import Location from '../../components/report/Location';
import ViolationTypeSelector from '../../components/report/ViolationTypeSelector';
import Photo from '../../components/report/Photo';
import ReportContent from '../../components/report/ReportContent';
import { useReportStore } from '../../store/ReportInfoStore';

const ReportPage: React.FC = () => {
  const { title, setTitle, setReport } = useStateStore();
  const { location, violationType, photos, reportContent } = useReportStore();

  useEffect(() => {
    setTitle('전동 킥보드 주정차 위반 신고');
    setReport();
  }, [title, setTitle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 수집된 데이터를 한 객체로 묶어 API 요청
    const formData = new FormData();
    formData.append('location', location);
    formData.append('violationType', violationType);
    formData.append('reportContent', reportContent);
    formData.append('firstPhoto', photos.firstPhoto);
    formData.append('secondPhoto', photos.secondPhoto);

  

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await fetch('https://api.example.com/report', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result); // 응답 처리
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  // location과 photo가 비어있으면 버튼 비활성화
  // const isButtonDisabled = !location || !photo;
  const isButtonDisabled = false;
  return (
    <>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <Location />
        <hr className="my-4" />
        <ViolationTypeSelector />
        <hr className="my-4" />
        <Photo />
        <hr className="my-4" />
        <ReportContent />
        <hr className="my-4" />
        <div className="m-6 flex items-center justify-center">
          <button
            type="submit"
            className={`rounded-md px-8 py-2 text-white ${
              isButtonDisabled
                ? 'cursor-not-allowed bg-gray-400' // 비활성화 상태에서 회색 배경과 커서 변경
                : 'bg-red-500 hover:bg-red-600' // 활성화 상태에서 빨간색 배경
            }`}
            disabled={isButtonDisabled} // 버튼 비활성화
          >
            신고하기
          </button>
        </div>
      </form>
    </>
  );
};

export default ReportPage;
