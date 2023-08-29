import { PostLogin, User } from 'models';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthStateType {
  token: string | null;
  User?: User | null;
}

interface AuthStoreType extends AuthStateType {
  setUser: (value: User) => void;
  setToken: (value: { token: string }) => void;
  postLogout: () => void;
}

const initialState: AuthStateType = {
  token: '',
  User: null,
};

const useUIStore = create(
  devtools<AuthStoreType>((set) => ({
    ...initialState,
    setUser: (value) => {
      set((state) => ({ User: value }));
    },
    setToken: (value) => {
      set({ token: value.token });
    },
    postLogout: () => set({ ...initialState }),
  }))
);

export default useUIStore;
