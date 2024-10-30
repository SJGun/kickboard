// kakao맵 오류없이 하기위해 window type 확장하기 (카카오도 인식 가능하게)
declare global {
  interface Window {
    kakao: any;
  }
}

import { useEffect, useRef, useState } from 'react';
import { fetchCoordinates } from '../../services/api';
import ChooseArea from '../../components/chooseArea';

const CollectList = () => {
  const KakaoMapApiKey = import.meta.env.VITE_KAKAOMAP_API_KEY;
  const [map, setMap] = useState<any>(null);
  // 마커 설정
  const [markers, setMarkers] = useState<any[]>([]);
  // map의 리렌더링을 막기위해 map reference 저장
  const mapRef = useRef<any>(null);

  
  // 마커 설정할 임시 위도경도 (마커 잘 표시되나 확인용)
  const sampleGwangsanCoordinates = [{ lat: 35.1385, lng: 126.7919 }];
  const sampleBookkuCoordinates = [{ lat: 35.1721, lng: 126.9103 }];
  const sampleDonguCoordinates = [{ lat: 35.1439, lng: 126.9207 }];
  const sampleSeoguCoordinates = [{ lat: 35.1505, lng: 126.8955 }];
  const sampleNamguCoordinates = [{ lat: 35.1302, lng: 126.9007 }];
  

  type AreaName = '광산구' | '북구' | '동구' | '서구' | '남구';
  // const areas: Record<AreaName, { lat: number; lng: number }> = {
  //   광산구: { lat: 35.1396, lng: 126.793 },
  //   북구: { lat: 35.1746, lng: 126.9116 },
  //   동구: { lat: 35.1463, lng: 126.9224 },
  //   서구: { lat: 35.1529, lng: 126.8909 },
  //   남구: { lat: 35.133, lng: 126.9029 },
  // };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KakaoMapApiKey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          // 제일 기본 광주시 위치
          center: new window.kakao.maps.LatLng(35.1595, 126.8526),
          level: 3,
        };
        const initializedMap = new window.kakao.maps.Map(container, options);
        setMap(initializedMap);
        mapRef.current = initializedMap;
      });
    };
  }, []);

  const addMarkers = (coordinates: { lat: number; lng: number }[]) => {
    if (!mapRef.current) return;

    // 현재 마커표시된것들 지워
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    // 각 위도경도에 따라 마커 생성
    const newMarkers = coordinates.map((coord) => {
      const position = new window.kakao.maps.LatLng(coord.lat, coord.lng);
      const marker = new window.kakao.maps.Marker({
        position,
        map: mapRef.current,
      });
      return marker;
    });

    setMarkers(newMarkers);

    if (newMarkers.length > 0) {
      mapRef.current.setCenter(newMarkers[0].getPosition());
    }
  };

  const handleAreaChange = async (selectedArea: AreaName) => {
    // const selectedArea = e.target.value as AreaName;
    // 지도가 있고 지역이 골라졌으면 백에서 수거리스트 위도경도 받아오기
    if (mapRef.current && selectedArea) {
      try {
        const coordinates = await fetchCoordinates(selectedArea);
        // 받아온 위도경도 마커표시
        addMarkers(coordinates);
      } catch (error) {
        console.error('수거 리스트 가져오지 못함: ', error);
        // 일단 샘플데이터로 마커 잘되는지 확인
        // 지역별로 샘플데이터 나눠둠
        // 실제 백엔드에서는 구별로 리스트 받을테니까 상관x
        addMarkers(sampleBookkuCoordinates);
      }
    }
  };

  return (
    <div>
      {/* 헤더 */}
      <div className="mb-5 flex h-12 flex-col items-center justify-center bg-[#DCDCDC]">
        <p className="text-center">수거 목록</p>
      </div>

      {/* tailwindcss 드롭다운 */}
      <div className="mb-5 ml-5">
        <ChooseArea onSelect={(area) => handleAreaChange(area as AreaName)} />
      </div>

      {/* 지도 띄우기 */}
      <div id="map" className="mb-12 h-[360px] w-full"></div>
    </div>
  );
};

export default CollectList;
