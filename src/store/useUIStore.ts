import { ToastProsp } from 'components/Toast';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIStateType {
  toast: ToastProsp;
  sideBarExpand: string[];
  sideBarFixed: boolean;
  navigate: string | number | null;
  navigateChangedCount: number;
}

interface UIStoreType extends UIStateType {
  openToast: (value: ToastProsp) => void;
  clearToast: () => void;
  closeToast: () => void;
  expandSideBar: (value: string[]) => void;
  fixedSideBar: (value: boolean) => void;
}

const initialState: UIStateType = {
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
  devtools<UIStoreType>((set) => ({
    ...initialState,
    openToast: (value) => {
      set((state) => ({ toast: { ...state.toast, open: true, ...value } }));
    },
    clearToast: () => {
      set((state) => ({ toast: initialState.toast }));
    },
    closeToast: () => {
      set((state) => ({ toast: { ...state.toast,  open: false, } }));
    },
    expandSideBar: (value) => {
      set({ sideBarExpand: value });
    },
    fixedSideBar: (value) => {
      set({ sideBarFixed: value });
    },
  }))
);

export default useUIStore;
