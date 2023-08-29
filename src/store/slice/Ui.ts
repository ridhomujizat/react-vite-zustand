import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastProsp } from 'components/Toast';
import { RootState } from 'store';

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
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openToast(state: UIState, action: PayloadAction<ToastProsp>) {
      state.toast = {
        ...state.toast,
        ...action.payload,
        open: true,
      };
    },
    closeToast(state: UIState) {
      state.toast.open = false;
    },
    clearToast(state: UIState) {
      state.toast = initialState.toast;
    },
    expandSideBar(state: UIState, action: PayloadAction<string[]>) {
      state.sideBarExpand = action.payload;
    },
    fixedSideBar(state: UIState, action: PayloadAction<boolean>) {
      state.sideBarFixed = action.payload;
    },
    navigate(state: UIState, action: PayloadAction<string | number>) {
      state.navigate = action.payload;
      state.navigateChangedCount += 1;
    },
  },
});

// Action
export const uiAction = uiSlice.actions;

// Selector
export const selectUIToast = (state: RootState) => state.ui.toast;

// Reducer
const uiReducer = uiSlice.reducer;
export default uiReducer;
