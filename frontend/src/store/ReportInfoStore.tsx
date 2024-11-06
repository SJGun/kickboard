import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReportState {
  location: string;
  violationType: string;
  photos: { firstPhoto: string; secondPhoto: string }; // 두 개의 사진을 위한 객체
  reportContent: string;
  setLocation: (location: string) => void;
  setViolationType: (violationType: string) => void;
  setPhotos: (newPhoto: string) => void; // 새로운 사진 추가 함수
  setReportContent: (reportContent: string) => void;
}

export const useReportStore = create<ReportState>()(
  persist(
    (set) => ({
      location: '',
      violationType: '',
      photos: { firstPhoto: '', secondPhoto: '' }, // 초기값으로 빈 문자열 설정
      reportContent: '',
      setLocation: (location) => set({ location }),
      setViolationType: (violationType) => set({ violationType }),
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
      setReportContent: (reportContent) => set({ reportContent }),
    }),
    {
      name: 'report-storage', // 로컬 스토리지에 저장될 이름
      storage: createJSONStorage(() => localStorage), // JSON 저장소 설정
    }
  )
);
