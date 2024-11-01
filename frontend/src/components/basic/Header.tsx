import React from 'react';
import RightArrowIcon from '../../assets/RightArrowIcon';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1은 이전 페이지로 이동
  };

  return (
    <>
      <div className="relative flex h-10 w-full items-center justify-center border border-black">
        <div
          className="absolute left-4 flex h-8 w-8 items-center justify-center hover:cursor-pointer"
          onClick={handleBackClick}
        >
          <RightArrowIcon />
        </div>
        <p className="font-bold">{title}</p>
      </div>
    </>
  );
};
export default Header;
