import { create } from 'zustand';
import * as api from '@/api';

const initialState = {
  user: null,
  token: '',
  permissionList: new Set<string>(),
  isInitialized: false,
};

export const authStore = create((set) => ({
  ...initialState,

  login: async (params: { username: string; password: string }) => {
    const res = await api.login(params);
    set({ ...res.data, isInitialized: true });
  },

  logout: async () => {
    set(initialState);
  },
}));
