import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReportState {
  companyName: string | null;
  setCompanyName: (companyName: string) => void;

  serialNumber: string | null;
  setSerialNumber: (serialNumber: string) => void;

  latitude: number;
  setLatitude: (latitude: number) => void;

  longitude: number;
  setLongitude: (longitude: number) => void;

  address: string | null;
  setAddress: (address: string) => void;

  categoryId: number;
  setCategoryId: (categoryId: number) => void;

  description: string | null;
  setDescription: (description: string | null) => void;

  photos: { firstPhoto: string; secondPhoto: string }; // 두 개의 사진을 위한 객체
  setPhotos: (newPhoto: string) => void; // 새로운 사진 추가 함수
}

export const useReportStore = create<ReportState>()(
  persist(
    (set) => ({
      companyName: null,
      setCompanyName: (companyName) => set({ companyName }),

      serialNumber: null,
      setSerialNumber: (serialNumber) => set({ serialNumber }),

      latitude: 33.450701,
      setLatitude: (latitude) => set({ latitude }),

      longitude: 126.570667,
      setLongitude: (longitude) => set({ longitude }),

      address: null,
      setAddress: (address) => set({ address }),

      categoryId: 0,
      setCategoryId: (categoryId) => set({ categoryId }),

      description: '',
      setDescription: (description) => set({ description }),

      photos: { firstPhoto: '', secondPhoto: '' }, // 초기값으로 빈 문자열 설정
      setPhotos: (newPhoto) =>
        set((state) => {
          // 새로운 사진을 첫 번째로 추가하고, 기존 첫 번째 사진을 두 번째로 이동
          return {
            photos: {
              secondPhoto: state.photos.firstPhoto,
              firstPhoto: newPhoto,
            },
          };
        }),
    }),
    {
      name: 'report-storage', // 로컬 스토리지에 저장될 이름
      storage: createJSONStorage(() => localStorage), // JSON 저장소 설정
    }
  )
);
