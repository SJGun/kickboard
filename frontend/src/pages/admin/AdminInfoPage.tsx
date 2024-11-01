import React, { useState } from 'react';
import NavBar from './AdminNavBar';

interface Notice {
    id: number;
    title: string;
    content: string;
}

const AdminInfoPage: React.FC = () => {
    const [notices, setNotices] = useState<Notice[]>([
        { id: 1, title: '첫 번째 공지사항', content: '첫 번째 공지사항의 내용입니다.' },
        { id: 2, title: '두 번째 공지사항', content: '두 번째 공지사항의 내용입니다.' },
    ]);

    const handleWriteNotice = () => {
        // 글쓰기 로직 추가
        console.log('글쓰기 버튼 클릭');
    };

    const handleViewNotice = (id: number) => {
        // 내용보기 로직 추가
        console.log(`내용보기 버튼 클릭: 공지사항 ID ${id}`);
    };

    const handleEditNotice = (id: number) => {
        // 수정하기 로직 추가
        console.log(`수정하기 버튼 클릭: 공지사항 ID ${id}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* NavBar Component */}
            <NavBar />
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-6">공지사항</h2>
                <button
                    onClick={handleWriteNotice}
                    className="mb-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                >
                    글쓰기
                </button>
                <div className="bg-white rounded shadow-md p-4">
                    {notices.length === 0 ? (
                        <p>등록된 공지사항이 없습니다.</p>
                    ) : (
                        <ul>
                            {notices.map((notice) => (
                                <li key={notice.id} className="mb-4 p-4 border-b">
                                    <h3 className="text-lg font-semibold">{notice.title}</h3>
                                    <p className="text-gray-600">{notice.content}</p>
                                    <div className="mt-2 flex space-x-2">
                                        <button
                                            onClick={() => handleViewNotice(notice.id)}
                                            className="py-1 px-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            내용보기
                                        </button>
                                        <button
                                            onClick={() => handleEditNotice(notice.id)}
                                            className="py-1 px-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                                        >
                                            수정하기
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminInfoPage;
