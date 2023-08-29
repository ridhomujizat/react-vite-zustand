import { ToastProsp } from 'components/Toast';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  toast: ToastProsp;
  sideBarExpand: string[];
  sideBarFixed: boolean;
  navigate: string | number | null;
  navigateChangedCount: number;
}

const initialState: UIState = {
  toast: {
    open: false,
    duration: 3000,
    severity: 'success',
    headMsg: '',
    message: '',
    deleted: false,
  },
  sideBarFixed: false,
  sideBarExpand: [],
  navigate: null,
  navigateChangedCount: 0,
};

const useUIStore = create(
  devtools((set) => ({
    ...initialState,
  }))
);
