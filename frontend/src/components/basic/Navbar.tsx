import { useStateStore } from '../../store/StateStore';
// 네브바 아이콘
import ReportOnIcon from '../../assets/navbar-icons/ReportOnIcon.svg';
import ReportOffIcon from '../../assets/navbar-icons/ReportOffIcon.svg';
import ReportListOnIcon from '../../assets/navbar-icons/ReportListOnIcon.svg';
import ReportListOffIcon from '../../assets/navbar-icons/ReportListOffIcon.svg';
import NoticeOnIcon from '../../assets/navbar-icons/NoticeOnIcon.svg';
import NoticeOffIcon from '../../assets/navbar-icons/NoticeOffIcon.svg';
//
const Navbar = () => {
  const store = useStateStore();
  console.log(store.isNotice);

  return (
    <div className="flex h-16 w-full items-center justify-evenly border border-black">
      <div className="flex flex-col items-center justify-center gap-1">
        {store.isReport ? <ReportOnIcon /> : <ReportOffIcon />}
        <p className="text-center text-xs">신고</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        {store.isReportList ? <ReportListOnIcon /> : <ReportListOffIcon />}
        <p className="text-center text-xs">목록</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        {store.isNotice ? <NoticeOnIcon /> : <NoticeOffIcon />}
        <p className="text-center text-xs">공지</p>
      </div>
    </div>
  );
};
export default Navbar;
