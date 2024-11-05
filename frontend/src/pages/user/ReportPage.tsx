import React, { useEffect } from 'react';
import { useStateStore } from '../../store/StateStore';
import Location from '../../components/report/Location';
import ViolationTypeSelector from '../../components/report/ViolationTypeSelector';

const ReportPage: React.FC = () => {
  const { title, setTitle, setReport } = useStateStore();

  useEffect(() => {
    setTitle('전동 킥보드 주정차 위반 신고');
    setReport();
  }, [title, setTitle]);

  return (
    <>
      <Location />
      <hr className="my-4" />
      <ViolationTypeSelector />
      <hr className="my-4" />
    </>
  );
};

export default ReportPage;
