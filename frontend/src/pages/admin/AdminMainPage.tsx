
import React from 'react';
import NavBar from './AdminNavBar';

interface Report {
    id: number;
    location: string;
    details: string;
    status: '신고접수' | '처리중' | '처리완료';
}

const AdminMainPage: React.FC = () => {
    const reports: Report[] = [
        { id: 1, location: '광주광역시 광산구 월계동 1-24', details: '횡단보도 3m 이내에 주차', status: '신고접수' },
        { id: 2, location: '광주광역시 광산구 월계동 2-24', details: '횡단보도 3m 이내에 주차', status: '처리중' },
        { id: 3, location: '광주광역시 광산구 월계동 3-24', details: '횡단보도 3m 이내에 주차', status: '처리완료' },
        { id: 4, location: '광주광역시 광산구 월계동 4-24', details: '횡단보도 3m 이내에 주차', status: '신고접수' },
        { id: 5, location: '광주광역시 광산구 월계동 5-24', details: '횡단보도 3m 이내에 주차', status: '처리중' },
        { id: 6, location: '광주광역시 광산구 월계동 6-24', details: '횡단보도 3m 이내에 주차', status: '처리완료' },
        // 더 많은 항목 추가 가능
    ];

    const reported = reports.filter(report => report.status === '신고접수');
    const inProgress = reports.filter(report => report.status === '처리중');
    const completed = reports.filter(report => report.status === '처리완료');

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* NavBar Component */}
            <NavBar />

            {/* Main Content */}
            <div className="p-8">
                <div className="mt-8 grid grid-cols-3 gap-4">
                    {/* Map and Image */}
                    <div className="bg-white p-6 rounded-md col-span-1">
                        <div className="bg-gray-300 h-48 w-full mb-4 rounded-md">
                            <p className="text-center text-gray-500 pt-20">Map Placeholder</p>
                        </div>
                        <p className="text-center text-gray-700">(처리 전) 광주광역시 광산구</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-md col-span-1">
                        <div className="bg-gray-300 h-48 w-full rounded-md">
                            <p className="text-center text-gray-500 pt-20">Image Placeholder</p>
                        </div>
                    </div>

                    {/* Report Details */}
                    <div className="bg-white p-6 rounded-md col-span-1 space-y-4">
                      
                    <div className="flex justify-center items-center bg-gray-100">
                    <div className="flex justify-center items-center bg-gray-100">
    <div className="bg-white p-6 rounded-md w-full max-w-md">
        <div className="grid grid-cols-[1fr_2fr] text-center">
            <div className="text-gray-500 font-semibold p-4">현재 상태</div>
            <div className="text-red-500 font-semibold p-4">신고접수</div>
            <div className="text-gray-500 font-semibold p-4">신고 일시</div>
            <div className="p-4">2024.10.29</div>
            <div className="text-gray-500 font-semibold p-4">신고자 정보</div>
            <div className="p-4">BEAM</div>
            <div className="text-gray-500 font-semibold p-4">신고 구분</div>
            <div className="p-4">어린이 보호구역 주차</div>
            <div className="text-gray-500 font-semibold p-4">신고 내용</div>
            <div className="col-span-1 p-4 h-24">어린이 보호구역 주차를 신고합니다. 신속히 처리해주세요. 부탁합니다</div>
        </div>
        <button className="mt-4 w-full bg-gray-300 py-2 rounded-md text-gray-700">수정하기</button>
    </div>
</div>

</div>



                    
                    </div>
                </div>

                {/* Report Summary and List */}
                <div className="mt-8">
                    <div className="flex justify-around bg-gray-200 py-4 rounded-md">
                        <div className="text-red-500">신고접수 <span className="font-semibold">{reported.length}</span> 건</div>
                        <div className="text-orange-500">처리중 <span className="font-semibold">{inProgress.length}</span> 건</div>
                        <div className="text-green-500">처리완료 <span className="font-semibold">{completed.length}</span> 건</div>
                    </div>

                    {/* Status-based Column Layout */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {/* 신고접수 Column */}
                        <div>
                            <h2 className="text-red-500 font-semibold mb-4">신고접수</h2>
                            {reported.map(report => (
                                <div key={report.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                                    <p className="text-gray-700 font-semibold">{report.location}</p>
                                    <p className="text-red-500 text-sm">{report.details}</p>
                                    <button className="mt-2 w-full bg-gray-300 py-2 rounded-md text-gray-700">내용보기</button>
                                </div>
                            ))}
                        </div>

                        {/* 처리중 Column */}
                        <div>
                            <h2 className="text-orange-500 font-semibold mb-4">처리중</h2>
                            {inProgress.map(report => (
                                <div key={report.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                                    <p className="text-gray-700 font-semibold">{report.location}</p>
                                    <p className="text-orange-500 text-sm">{report.details}</p>
                                    <button className="mt-2 w-full bg-gray-300 py-2 rounded-md text-gray-700">내용보기</button>
                                </div>
                            ))}
                        </div>

                        {/* 처리완료 Column */}
                        <div>
                            <h2 className="text-green-500 font-semibold mb-4">처리완료</h2>
                            {completed.map(report => (
                                <div key={report.id} className="bg-white p-4 rounded-md shadow-md mb-4">
                                    <p className="text-gray-700 font-semibold">{report.location}</p>
                                    <p className="text-green-500 text-sm">{report.details}</p>
                                    <button className="mt-2 w-full bg-gray-300 py-2 rounded-md text-gray-700">내용보기</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMainPage;
