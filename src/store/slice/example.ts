/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { BannerTypes, CreateBannerTypes } from 'models';

interface ComproState {
  isLoading: boolean;
  banner: {
    isLoading: boolean;
    detail: null | BannerTypes;
    data: BannerTypes[];
  };
}

const initialState: ComproState = {
  isLoading: false,
  banner: {
    isLoading: false,
    detail: null,
    data: [],
  },
};

const comproSlice = createSlice({
  name: 'compro',
  initialState,
  reducers: {
    startLoading(state: ComproState) {
      state.isLoading = true;
    },
    stoptLoading(state: ComproState) {
      state.isLoading = false;
    },
    // Banner =======================
    stopLoadingBanner(state: ComproState) {
      state.banner.isLoading = false;
    },
    setBanner(state: ComproState, action: PayloadAction<BannerTypes[]>) {
      state.banner.data = action.payload;
    },
    setBannerDetail(
      state: ComproState,
      action: PayloadAction<BannerTypes | null>,
    ) {
      state.banner.detail = action.payload;
    },
    getDataBanner(state: ComproState) {
      state.banner.isLoading = true;
    },
    getDataBannerDetail(
      state: ComproState,
      action: PayloadAction<{ id: string | number }>,
    ) {
      state.banner.isLoading = true;
    },
    createDataBanner(
      state: ComproState,
      action: PayloadAction<CreateBannerTypes>,
    ) {
      state.banner.isLoading = true;
    },
    updateBanner(
      state: ComproState,
      action: PayloadAction<{
        id: string | number;
        body: CreateBannerTypes;
      }>,
    ) {
      state.banner.isLoading = true;
    },
    deleteBanner(state: ComproState, action: PayloadAction<string | number>) {
      state.banner.isLoading = true;
    },
  },
});

// Action
export const comproAction = comproSlice.actions;

// Selector
export const selectComproToast = (state: RootState) => state.compro;

// Reducer
const bannerReducer = comproSlice.reducer;
export default bannerReducer;
