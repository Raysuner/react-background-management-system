import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  return {
    user,
  };
};
