import { create } from 'zustand';

interface State {
  isNotice: boolean;
  isReport: boolean;
  isReportList: boolean;
}

export const useStateStore = create<State>((set) => ({
  isReport: true,
  isReportList: false,
  isNotice: false,
  setReport: () =>
    set({ isReport: true, isReportList: false, isNotice: false }),
  setReportList: () =>
    set({ isReport: false, isReportList: true, isNotice: false }),
  setisNotice: () =>
    set({ isReport: false, isReportList: false, isNotice: true }),
}));
