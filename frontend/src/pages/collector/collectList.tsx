// kakao맵 오류없이 하기위해 window type 확장하기 (카카오도 인식 가능하게)
declare global {
  interface Window {
    kakao: any;
  }
}

import { useEffect, useRef, useState } from 'react';
import { fetchCollectLists } from '../../services/api';
import ChooseArea from '../../components/chooseArea';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

const CollectList = () => {
  const KakaoMapApiKey = import.meta.env.VITE_KAKAOMAP_API_KEY;
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const mapRef = useRef<any>(null);
  const [collectList, setCollectList] = useState<any[]>([]);
  const [addressList, setAddressList] = useState<
    { category: string; address: string; lat: number; lng: number }[]
  >([]);
  const [kakaoLoaded, setKakaoLoaded] = useState(false); // 카카오맵이 로딩됐는지 여부 확인
  const [buttonStatus, setButtonStatus] = useState<{ [key: number]: string }>(
    {}
  ); // 버튼이 바뀌게 하기

  const sampleCollectList = [
    {
      images: ['https://picsum.photos/200/300', 'someurl2'],
      category: '횡단보도 3m 안에 주차',
      lat: 35.1405,
      lng: 126.79,
    },
    {
      images: ['https://picsum.photos/200/300', 'someurl2'],
      category: '상가 입구를 막고 있음',
      lat: 35.1385,
      lng: 126.7919,
    },
    {
      images: ['https://picsum.photos/200/300', 'someurl2'],
      category: '어린이보호구역에 주차',
      lat: 35.13,
      lng: 126.7808,
    },
  ];

  type AreaName = '광산구' | '북구' | '동구' | '서구' | '남구';

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
          level: 3,
        };
        const initializedMap = new window.kakao.maps.Map(container, options);
        setMap(initializedMap);
        mapRef.current = initializedMap;
        setKakaoLoaded(true); // 로딩 끝났으면 로딩상태 true로 바꿔
      });
    };
  }, []);

  // 지도에 마커 추가
  const addMarkers = (
    locations: {
      images: string[];
      category: string;
      lat: number;
      lng: number;
    }[]
  ) => {
    if (!mapRef.current) return;

    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    const newMarkers = locations.map((location) => {
      const position = new window.kakao.maps.LatLng(location.lat, location.lng);
      const marker = new window.kakao.maps.Marker({
        position,
        map: mapRef.current,
      });

      // 마커 클릭했을때 커스텀 창 띄우기 (나는 이미지랑 유형 보여줄것임)
      const infoWindowContent = `
      <div class="bg-white shadow-lg rounded-lg p-3 text-center max-w-[150px] overflow-hidden">
        <p class="font-semibold text-sm mb-1 truncate">${location.category}</p>
        <img src="${location.images[0]}" alt="${location.category}" class="w-full h-auto rounded-md"/>
      </div>
    `;

      // 커스텀 윈도우
      const customOverlay = new window.kakao.maps.CustomOverlay({
        content: infoWindowContent,
        position,
        // 윈도우 띄울 위치조정
        yAnchor: 1.2,
        xAnchor: 0.5,
        map: mapRef.current,
      });

      // 일단 창 숨겨
      customOverlay.setMap(null);

      // 클릭이벤트 (마커 클릭) - 클릭에 따라 보였다 숨겨졌다
      window.kakao.maps.event.addListener(marker, 'click', () => {
        if (customOverlay.getMap()) {
          customOverlay.setMap(null);
        } else {
          customOverlay.setMap(mapRef.current);
        }
      });

      return marker;
    });

    setMarkers(newMarkers);

    if (newMarkers.length > 0) {
      mapRef.current.setCenter(newMarkers[0].getPosition());
    }
  };

  // 수거 버튼 클릭 이벤트
  const handleButtonClick = (index: number, lat: number, lng: number) => {
    const currentStatus = buttonStatus[index] || '수거 시작';

    if (currentStatus === '수거 시작') {
      setButtonStatus((prevStatus) => ({ ...prevStatus, [index]: '길찾기' }));
    } else if (currentStatus === '길찾기') {
      // 사용자 현재 위치
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Initialize Kakao Geocoder
          const geocoder = new window.kakao.maps.services.Geocoder();

          // Reverse geocode to get the user's current address
          geocoder.coord2Address(
            userLng,
            userLat,
            (result: any, status: any) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const userAddress = result[0].address.address_name;

                const kakaoMapUrl = `https://map.kakao.com/?sName=${encodeURIComponent(userAddress)}&eName=${encodeURIComponent(
                  addressList[index].address
                )}&posX=${lng}&posY=${lat}`;

                window.open(kakaoMapUrl, '_blank');
                setButtonStatus((prevStatus) => ({
                  ...prevStatus,
                  [index]: '처리하기',
                }));
              } else {
                alert('현재 위치의 주소를 찾을 수 없습니다.');
              }
            }
          );
        },
        (error) => {
          console.error('Could not retrieve location:', error);
          alert('위치를 가져올 수 없습니다. 위치 서비스를 허용해주세요.');
        }
      );
    } else if (currentStatus === '처리하기') {
      setButtonStatus((prevStatus) => ({
        ...prevStatus,
        [index]: '수거 시작',
      }));
    }
  };

  // 백으로 구역 보내서 그 구역의 수거 리스트 받아와
  const handleAreaChange = async (selectedArea: AreaName) => {
    if (mapRef.current && selectedArea) {
      try {
        // 실제 response에 따라서 바꾸자
        const response = await fetchCollectLists(selectedArea);
        const coordinates = response.coordinates;
        setCollectList(response.list);
        addMarkers(coordinates);
      } catch (error) {
        console.error('수거 리스트 가져오지 못함: ', error);
        // 오류떴을때는 샘플 설정
        addMarkers(sampleCollectList);
        setCollectList(sampleCollectList);
      }
    }
  };

  // 위도경도 실제 주소로 바꿔
  const convertToAddress = async () => {
    if (!window.kakao?.maps?.services) {
      console.error('카카오지도 아직 로딩이 안됨');
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    const updatedAddressList: {
      category: string;
      address: string;
      lat: number;
      lng: number;
    }[] = [];

    // 여기 나중에 실제로는 collectList로 바꿔야돼 이름!!
    for (const { category, lat, lng } of sampleCollectList) {
      const coords = new window.kakao.maps.LatLng(lat, lng);

      await new Promise<void>((resolve) => {
        geocoder.coord2Address(
          coords.getLng(),
          coords.getLat(),
          (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const address = result[0].address.address_name;
              updatedAddressList.push({ category, address, lat, lng });
            } else {
              updatedAddressList.push({
                category,
                address: '주소를 찾을 수 없음',
                lat,
                lng,
              });
            }
            resolve();
          }
        );
      });
    }

    setAddressList(updatedAddressList);
  };

  useEffect(() => {
    if (kakaoLoaded) {
      convertToAddress();
    }
  }, [kakaoLoaded]);

  const handleListClick = (index: number) => {
    const selectedMarker = markers[index];
    if (selectedMarker && mapRef.current) {
      mapRef.current.setCenter(selectedMarker.getPosition());
    }
  };

  return (
    <div>
      {/* 헤더 */}
      <div className="mb-5 flex h-12 flex-col items-center justify-center bg-[#DCDCDC]">
        <p className="text-center">수거 목록</p>
      </div>

      {/* 구역 선택 드롭다운 */}
      <div className="mb-5 ml-5">
        <ChooseArea onSelect={(area) => handleAreaChange(area as AreaName)} />
      </div>

      {/* 지도 */}
      <div id="map" className="mb-12 h-[360px] w-full"></div>

      {/* 수거 건수 */}
      <div className="ml-5">
        <p>
          총{' '}
          <span className="text-xl font-bold text-red-500">
            {addressList.length}
          </span>
          건
        </p>
      </div>

      {/* 수거 리스트 */}
      <div className="m-5 mb-5">
        {addressList.map((item, index) => (
          <div
            className="mb-5 flex cursor-pointer items-center justify-between rounded-lg border border-black bg-[rgba(220,220,220,0.38)] p-2 text-xs"
            key={index}
            onClick={() => handleListClick(index)}
          >
            <div>
              <div className="flex items-center">
                <p className="flex items-center">
                  <span className="mr-1">{item.address}</span>
                  <span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // 리스트 클릭 트리거 방지
                        navigator.clipboard.writeText(item.address);
                      }}
                    >
                      <ClipboardDocumentListIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </span>
                </p>
              </div>
              <p className="font-bold text-red-500">{item.category}</p>
            </div>
            <button
              className={`rounded-md border p-2 ${
                buttonStatus[index] === '길찾기'
                  ? 'bg-blue-500 text-white'
                  : buttonStatus[index] === '처리하기'
                    ? 'bg-green-500 text-white'
                    : 'border-black bg-white'
              }`}
              onClick={() => handleButtonClick(index, item.lat, item.lng)}
            >
              {buttonStatus[index] || '수거 시작'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectList;
