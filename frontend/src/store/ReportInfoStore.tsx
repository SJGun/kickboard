import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReportState {
  location: string;
  violationType: string;
  photo: File | null;
  reportContent: string;
  setLocation: (location: string) => void;
  setViolationType: (violationType: string) => void;
  setPhoto: (photo: File | null) => void;
  setReportContent: (reportContent: string) => void;
}

export const useReportStore = create<ReportState>()(
  persist(
    (set) => ({
      location: '',
      violationType: '',
      photo: null,
      reportContent: '',
      setLocation: (location) => set({ location }),
      setViolationType: (violationType) => set({ violationType }),
      setPhoto: (photo) => set({ photo }),
      setReportContent: (reportContent) => set({ reportContent }),
    }),
    {
      name: 'report-storage', // 로컬 스토리지에 저장될 이름
      storage: createJSONStorage(() => localStorage), // JSON 저장소 설정
    }
  )
);
