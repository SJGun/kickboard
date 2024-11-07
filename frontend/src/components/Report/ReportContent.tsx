import React from 'react';
import { useReportStore } from '../../store/ReportInfoStore';

const ReportContent: React.FC = () => {
  const { reportContent, setReportContent } = useReportStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <textarea
        onChange={handleChange}
        placeholder="신고할 내용을 입력하세요."
        className="my-button h-40 w-full"
        defaultValue={reportContent}
      />
    </div>
  );
};

export default ReportContent;
