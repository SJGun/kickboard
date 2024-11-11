import { useEffect, useRef, useState } from 'react';
import NavBar from './components/AdminNavBar';

const AdminMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [overlays, setOverlays] = useState<any[]>([]);
  const [centerAddress, setCenterAddress] = useState<string>('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['전체']);
  const [selectedReport, setSelectedReport] = useState(null);

  const KAKAO_MAP_KEY = import.meta.env.VITE_KAKAOMAP_API_KEY;

  // Sample data generation
  const companies = ['BEAM', 'DEER', 'SWING', 'KICK GOING', 'LIME'];
  const addresses = [
    '광주광역시 광산구 장덕동 1623-3',
    '광주광역시 광산구 수완동 1089-1',
    '광주광역시 광산구 신가동 992-1',
    '광주광역시 광산구 운남동 785-1',
    '광주광역시 광산구 첨단동 1223-3',
  ];

  const generateSampleData = () => {
    const adminStatuses = ['신고접수', '수거중', '수거완료'];
    return Array.from({ length: 10 }, (_, index) => ({
      reportId: `REP${String(index + 1).padStart(4, '0')}`,
      companyName: companies[Math.floor(Math.random() * companies.length)],
      serialNumber: `SN${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
      latitude: 35.1595 + (Math.random() - 0.5) * 0.01,
      longitude: 126.8526 + (Math.random() - 0.5) * 0.01,
      address: addresses[index % addresses.length],
      adminStatus: adminStatuses[Math.floor(Math.random() * adminStatuses.length)],
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000))
        .toISOString()
        .replace('T', ' ')
        .slice(0, 16),
      imageUrl: `/api/placeholder/200/150`
    }));
  };

  const [reports] = useState(generateSampleData());

  const statusOptions = ['전체', '신고접수', '수거중', '수거완료'];
  
  const companyColors = {
    'BEAM': '#FF6B6B',    
    'DEER': '#4ECDC4',    
    'SWING': '#45B7D1',   
    'KICK GOING': '#96CEB4', 
    'LIME': '#26A69A'     
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case '신고접수':
        return `
          <circle cx="12" cy="12" r="8" fill="white"/>
          <path fill="black" d="M11 6h2v6h-2zM11 14h2v2h-2z"/>
        `;
      case '수거중':
        return `
          <circle cx="12" cy="12" r="8" fill="white"/>
          <path fill="black" d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm2.5-5.5l-3.5 2V8h1v4.3l2.5-1.7.5.9z"/>
        `;
      case '수거완료':
        return `
          <circle cx="12" cy="12" r="8" fill="white"/>
          <path fill="black" d="M9.5 15.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"/>
        `;
      default:
        return '';
    }
  };

  const createMarkerImage = (color: string, status: string) => {
    const markerSize = new window.kakao.maps.Size(24, 35);
    const markerShape = {
      coords: [12, 34, 1, 21, 1, 12, 6, 4, 18, 4, 23, 12, 23, 21, 12, 34],
      type: 'poly'
    };

    return {
      src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 35">
          <path fill="${color}" d="M12 0C5.4 0 0 5.4 0 12c0 7.5 12 23 12 23s12-15.5 12-23c0-6.6-5.4-12-12-12z"/>
          ${getStatusIcon(status)}
        </svg>
      `)}`,
      size: markerSize,
      shape: markerShape
    };
  };

  const createCustomOverlayContent = (report: any) => {
    const content = document.createElement('div');
    content.className = 'custom-overlay';
    content.innerHTML = `
      <div class="overlay-wrapper" style="
        position: relative;
        width: 300px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        padding: 15px;
        font-family: system-ui, -apple-system, sans-serif;
      ">
        <div class="close-btn" style="
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-size: 18px;
          color: #666;
        ">&times;</div>
        
        <img src="${report.imageUrl}" alt="Report Image" style="
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        "/>
        
        <div style="
          padding: 0 5px;
        ">
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          ">
            <span style="
              font-weight: 600;
              color: ${companyColors[report.companyName]};
            ">${report.companyName}</span>
            <span style="
              color: #666;
              font-size: 0.9em;
            ">${report.createdAt}</span>
          </div>
          
          <div style="
            margin-bottom: 8px;
            color: #333;
            font-size: 0.95em;
          ">
            <div style="font-weight: 500;">주소</div>
            <div style="color: #666;">${report.address}</div>
          </div>
          
          <div style="
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: ${
              report.adminStatus === '신고접수' ? '#FEE2E2' :
              report.adminStatus === '수거중' ? '#E0F2FE' :
              '#DCFCE7'
            };
            color: ${
              report.adminStatus === '신고접수' ? '#DC2626' :
              report.adminStatus === '수거중' ? '#0284C7' :
              '#16A34A'
            };
            font-size: 0.9em;
            font-weight: 500;
          ">${report.adminStatus}</div>
        </div>
      </div>
    `;

    // Add click event to close button
    const closeBtn = content.querySelector('.close-btn');
    closeBtn!.addEventListener('click', function() {
      overlays.forEach(overlay => overlay.setMap(null));
    });

    return content;
  };

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prev => {
      if (status === '전체') {
        return ['전체'];
      }
      
      const newStatuses = prev.filter(s => s !== '전체');
      if (prev.includes(status)) {
        const filteredStatuses = newStatuses.filter(s => s !== status);
        return filteredStatuses.length === 0 ? ['전체'] : filteredStatuses;
      } else {
        return [...newStatuses, status];
      }
    });
  };

  const getFilteredReports = () => {
    if (selectedStatuses.includes('전체')) {
      return reports;
    }
    return reports.filter(report => selectedStatuses.includes(report.adminStatus));
  };

  useEffect(() => {
    if (!KAKAO_MAP_KEY) {
      console.error('Kakao Map API key is not defined');
      return;
    }

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const options = {
          center: new window.kakao.maps.LatLng(35.1595, 126.8526),
          level: 3,
        };

        const newMap = new window.kakao.maps.Map(mapRef.current, options);
        
        const geocoder = new window.kakao.maps.services.Geocoder();
        newMap.addListener('idle', () => {
          const center = newMap.getCenter();
          geocoder.coord2Address(center.getLng(), center.getLat(), (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              setCenterAddress(result[0].address.address_name);
            }
          });
        });

        setMap(newMap);
      });
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [KAKAO_MAP_KEY]);

  useEffect(() => {
    if (!map) return;

    markers.forEach(marker => marker.setMap(null));
    overlays.forEach(overlay => overlay.setMap(null));

    const filteredReports = getFilteredReports();
    const newMarkers: any[] = [];
    const newOverlays: any[] = [];

    filteredReports.forEach(report => {
      const position = new window.kakao.maps.LatLng(
        report.latitude,
        report.longitude
      );

      const markerImage = new window.kakao.maps.MarkerImage(
        createMarkerImage(companyColors[report.companyName] || '#FF0000', report.adminStatus).src,
        new window.kakao.maps.Size(24, 35)
      );

      const marker = new window.kakao.maps.Marker({
        position,
        map,
        image: markerImage
      });

      const overlay = new window.kakao.maps.CustomOverlay({
        content: createCustomOverlayContent(report),
        position: position,
        xAnchor: 0.5,
        yAnchor: 1
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        newOverlays.forEach(o => o.setMap(null));
        overlay.setMap(map);
        setSelectedReport(report);
        
        // 마커 클릭 시 해당 위치로 부드럽게 이동
        map.panTo(position);
      });

      window.kakao.maps.event.addListener(map, 'click', () => {
        overlay.setMap(null);
      });

      newMarkers.push(marker);
      newOverlays.push(overlay);
    });

    setMarkers(newMarkers);
    setOverlays(newOverlays);
  }, [map, reports, selectedStatuses]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      
      {/* Filter Panel */}
      <div className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto">
          {/* Combined Filters Row */}
          <div className="flex flex-wrap gap-8 items-start">
            {/* Status Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">상태 필터</h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map(status => (
                  <button
                    key={status}
                    onClick={() => handleStatusToggle(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStatuses.includes(status)
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Legend */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">업체별 현황</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {Object.entries(companyColors).map(([company, color]) => (
                  <div key={company} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-medium text-gray-700">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <div ref={mapRef} className="w-full h-full absolute inset-0" />
        
        {/* Center Address Display */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-gray-900 font-medium">{centerAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMap;