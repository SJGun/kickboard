
import React from 'react';
import NavBar from './AdminNavBar';


const AdminInfoPage: React.FC = () => {


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* NavBar Component */}
            <NavBar />
            <p>공지사항</p>
            {/* Main Content */}
        </div>
    );
};

export default AdminInfoPage;
