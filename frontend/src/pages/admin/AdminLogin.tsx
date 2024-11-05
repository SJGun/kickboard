import React, { useState } from 'react';
import NavBar from './components/AdminNavBar';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인 처리 로직 추가
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* NavBar Component */}
            {/* <NavBar /> */}
            <div className="flex-1 flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
