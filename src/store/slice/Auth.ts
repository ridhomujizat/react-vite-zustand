import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { PostLogin, User } from 'models';

interface AuthState {
  token: string | null;
  User?: User | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  token: '',
  User: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postLogin(state: AuthState, action: PayloadAction<PostLogin>) {
      state.isLoading = true;
    },
    setUser(state: AuthState, action: PayloadAction<User>) {
      state.User = action.payload;
    },
    setToken(state: AuthState, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    postLogout(state: AuthState) {
      state = initialState;
    },
    startLoading(state: AuthState) {
      state.isLoading = true;
    },
    stoptLoading(state: AuthState) {
      state.isLoading = false;
    },
  },
});

// Action
export const authAction = authSlice.actions;

// Selector
export const selectauthToast = (state: RootState) => state.auth;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
