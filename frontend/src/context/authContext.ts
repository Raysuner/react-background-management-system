import { createContext } from 'react';

export const AuthContext = createContext({
  user: {
    username: '',
    role: {
      value: '',
      label: '',
      permissionList: [],
    },
  },
});
