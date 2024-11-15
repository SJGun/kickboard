import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Notice {
  id: number;
  title: string;
  content: string;
}

const NoticePage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null); // State for selected notice

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL}/kickboard/admin/notice/notices`
        );
        if (response.data.success) {
          setNotices(response.data.data.map((item: any) => item.data));
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleRowClick = (notice: Notice) => {
    setSelectedNotice(notice); // Set the selected notice to show in the popup
  };

  const handleClosePopup = () => {
    setSelectedNotice(null); // Close the popup by resetting the selected notice
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="text-lg text-gray-500">로딩 중...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4">
      <div className="space-y-4 sm:space-y-6">
        {notices.length === 0 ? (
          <div className="text-center text-gray-500">
            등록된 공지사항이 없습니다.
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="w-3/12 border-b px-4 py-2 text-center text-gray-800">
                  번호
                </th>
                <th className="w-9/12 border-b px-4 py-2 text-center text-gray-800">
                  제목
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={notice.id}
                  className="cursor-pointer border-b hover:bg-gray-100"
                  onClick={() => handleRowClick(notice)} // Handle row click
                >
                  <td className="px-4 py-2 text-center text-gray-800">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {notice.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal (Popup) for displaying the title and content */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              {selectedNotice.title}
            </h2>
            <p className="mb-4 whitespace-pre-line text-gray-700">
              {selectedNotice.content}
            </p>
            <div className="flex justify-center">
              <button
                className="rounded-lg bg-red-500 px-6 py-2 text-white transition-all hover:bg-red-600"
                onClick={handleClosePopup} // Close the popup
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticePage;
