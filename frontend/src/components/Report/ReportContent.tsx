import React, { useState } from 'react';

const ReportContent: React.FC = () => {
  const [content, setContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <textarea
        id="reportContent"
        value={content}
        onChange={handleChange}
        placeholder="신고할 내용을 입력하세요."
        className="my-button h-40 w-full"
      />
    </div>
  );
};

export default ReportContent;
