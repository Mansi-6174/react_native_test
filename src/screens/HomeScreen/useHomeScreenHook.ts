import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { clearUserData } from '../../store/reducers/authSlice';
import useResetStack from '../../commonHooks/useResetStack';

const useHomeScreenHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resetStack = useResetStack();
  const dispatch = useDispatch();

  const onLogout = async () => {
    setLoading(true);
    setError(null);
    await AsyncStorage.removeItem('token');
    dispatch(clearUserData());
    setLoading(false);
    resetStack('NonAuth');
  };

  return {
    onLogout,
    loading,
    error,
  };
};

export default useHomeScreenHook;
