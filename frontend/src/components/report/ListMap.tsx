import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface ReportData {
  address: string;
  area: string;
  category: string;
  companyId: number;
  createdAt: string;
  descriptions: string;
  images: string[];
  latitude: number;
  longitude: number;
  reportId: number;
  serialNumber: string;
  status: string;
}

interface ListProps {
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
  response: ReportData[]; // response의 타입을 실제 데이터에 맞게 정의해주세요
=======
  response: ReportData[];
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
}

const ListMap: React.FC<ListProps> = ({ response }) => {
  const [map, setMap] = useState<any>(null);
  const mapRef = useRef<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [kakaoLoaded, setKakaoLoaded] = useState(false);
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
  map;
  kakaoLoaded;
  // 카카오맵이 로딩됐는지 여부 확인
  // =============================================================
  const KakaoMapApiKey = import.meta.env.VITE_KAKAOMAP_API_KEY;

  // 지도 띄우기 위해 document에 script 추가
=======

  const KakaoMapApiKey = import.meta.env.VITE_KAKAOMAP_API_KEY;

  // 카카오맵 초기화 코드는 동일...
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KakaoMapApiKey}&autoload=false&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(35.1595, 126.8526),
          level: 6,
        };
        const initializedMap = new window.kakao.maps.Map(container, options);
        setMap(initializedMap);
        mapRef.current = initializedMap;
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
        setKakaoLoaded(true); // 로딩 끝났으면 로딩상태 true로 바꿔
=======
        setKakaoLoaded(true);
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
      });
    };
  }, []);

  // 마커 생성 및 표시
  useEffect(() => {
    if (!kakaoLoaded || !map || !response) return;

<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
    // 기존 마커들 제거
    markers.forEach((marker) => marker.setMap(null));

    // 새로운 마커 배열
    const newMarkers: any[] = [];

    // 지도 범위 재설정을 위한 bounds 객체
=======
    markers.forEach((marker) => marker.setMap(null));
    const newMarkers: any[] = [];
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
    const bounds = new window.kakao.maps.LatLngBounds();

    response.forEach((item) => {
      const position = new window.kakao.maps.LatLng(
        item.latitude,
        item.longitude
      );

<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
=======
      // 상태에 따른 마커 이미지 설정
      const markerSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        item.status === 'REPORT_COMPLETED'
          ? // 완료된 신고 마커 (초록색)
            'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 24 35">
                <path fill="#15803d" d="M12 0C5.4 0 0 5.4 0 12c0 7.5 12 23 12 23s12-15.5 12-23c0-6.6-5.4-12-12-12z"/>
                <circle fill="#ffffff" cx="12" cy="12" r="6"/>
              </svg>
            `)
          : // 처리 중인 신고 마커 (노란색)
            'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 24 35">
                <path fill="#a16207" d="M12 0C5.4 0 0 5.4 0 12c0 7.5 12 23 12 23s12-15.5 12-23c0-6.6-5.4-12-12-12z"/>
                <circle fill="#ffffff" cx="12" cy="12" r="6"/>
              </svg>
            `),
        markerSize
      );

>>>>>>> develop:frontend/src/components/report/ListMap.tsx
      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: position,
        map: map,
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
      });

      // 인포윈도우 생성
=======
        image: markerImage,
      });

      // 나머지 인포윈도우 코드는 동일...
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
      const getStatusStyle = (status: string): string => {
        if (status === 'REPORT_COMPLETED') {
          return `
            display: inline-block;
            padding: 4px 12px;
            border-radius: 8px;
            border: 1px solid #86efac;
            background-color: #dcfce7;
            color: #15803d;
            font-weight: 600;
            font-size: 14px;
          `;
        }
        return `
          display: inline-block;
          padding: 4px 12px;
          border-radius: 8px;
          border: 1px solid #fde047;
          background-color: #fef9c3;
          color: #a16207;
          font-weight: 600;
          font-size: 14px;
        `;
      };

      const getStatusText = (status: string): string => {
        return status === 'REPORT_COMPLETED' ? '처리 완료' : '처리 중';
      };

<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
      // 인포윈도우 생성
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `
=======
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `
        <a href=/list/${item.reportId}>
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
          <div style="
            padding: 1rem;
            width: 250px;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 14px;
          ">
            <div style="
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            ">
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <strong style="
                  color: #4b5563;
                  min-width: 60px;
                ">카테고리:</strong>
                <span style="color: #1f2937">${item.category}</span>
              </div>
              
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <strong style="
                  color: #4b5563;
                  min-width: 60px;
                ">주소:</strong>
                <span style="color: #1f2937">${item.address}</span>
              </div>
              
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <strong style="
                  color: #4b5563;
                  min-width: 60px;
                ">지역:</strong>
                <span style="color: #1f2937">${item.area}</span>
              </div>
              
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <strong style="
                  color: #4b5563;
                  min-width: 60px;
                ">상태:</strong>
                <div style="${getStatusStyle(item.status)}">
                  ${getStatusText(item.status)}
                </div>
              </div>
              
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <strong style="
                  color: #4b5563;
                  min-width: 60px;
                ">등록일:</strong>
                <span style="color: #1f2937">${new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
        `,
      });

      // 마커 클릭 이벤트
      window.kakao.maps.event.addListener(marker, 'click', function () {
        // 다른 인포윈도우 닫기
=======
        </a>
        `,
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
        newMarkers.forEach((m) => m.infowindow.close());
        infowindow.open(map, marker);
      });

      window.kakao.maps.event.addListener(map, 'click', function () {
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
        // 모든 인포윈도우 닫기
        newMarkers.forEach((m) => m.infowindow.close());
      });

      // 마커와 인포윈도우를 객체로 저장
      newMarkers.push({ marker, infowindow });

      // bounds에 좌표 추가
      bounds.extend(position);
    });

    // 모든 마커가 보이도록 지도 범위 재설정
    map.setBounds(bounds);

    // 마커 상태 업데이트
=======
        newMarkers.forEach((m) => m.infowindow.close());
      });

      newMarkers.push({ marker, infowindow });
      bounds.extend(position);
    });

    map.setBounds(bounds);
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
    setMarkers(newMarkers);
  }, [kakaoLoaded, map, response]);

  return (
    <>
<<<<<<< HEAD:frontend/src/components/Report/ListMap.tsx
      <div id="map" className="mb-5 h-[500px] w-full"></div>
=======
      <div id="map" className="h-[calc(70vh)] w-full overflow-hidden"></div>
>>>>>>> develop:frontend/src/components/report/ListMap.tsx
    </>
  );
};

export default ListMap;
