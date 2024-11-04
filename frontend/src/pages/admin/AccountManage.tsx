import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './AdminNavBar';

const AccountManage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <NavBar />
      <div className="flex flex-grow flex-col items-center justify-center p-6">
        <h1 className="mb-12 text-3xl font-bold text-gray-800">계정 관리</h1>
        <div className="w-full max-w-xs rounded-lg bg-white p-8 shadow-md">


          <div className=" w-full max-w-xs">
          <ul className="mb-2 space-y-2">
            <li className="rounded-md bg-gray-200 p-4 shadow-sm">관리자 계정</li>
            <li className="rounded-md bg-gray-200 p-4 shadow-sm">수거업체 계정</li>
          </ul>
        </div>

          <Link to="/accountsignup">
            <button className="w-full rounded bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700">
              계정 생성
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountManage;
