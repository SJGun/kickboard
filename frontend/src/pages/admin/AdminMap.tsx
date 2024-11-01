
import React from 'react';
import NavBar from './AdminNavBar';


const AdminMap: React.FC = () => {


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* NavBar Component */}
            <NavBar />
            <p>지도</p>
            {/* Main Content */}
        </div>
    );
};

export default AdminMap;
