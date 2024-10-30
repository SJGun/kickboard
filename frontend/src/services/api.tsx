// src/services/api.tsx
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 백엔드로 보낼때
const api = axios.create({
  baseURL: BASE_URL, // 일단 임시로 baseURL 설정
  timeout: 5000, // 5초안에 응답없으면 cancel
  headers: {
    'Content-Type': 'application/json',
  },
});

// 필요한 api function들 만들기

// 수거업체 로그인
export const collectorLogin = async (id: string, password: string) => {
  try {
    const response = await api.post('/수거업체 로그인 백엔드 링크', {
      id,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('로그인 불가', error);
    throw error;
  }
};

// 수거업체 수거 리스트 받기위해 백엔드로 요청
export const fetchCoordinates = async (area: string) => {
  try {
    const response = await api.get(`/coordinates`, { params: { area } });
    return response.data;
  } catch (error) {
    console.error('수거 리스트 받지 못함: ', error);
    throw error;
  }
};

export default api;
