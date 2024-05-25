import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/reducers/authSlice';
import { login } from '../../api/authServices';
import useResetStack from '../../commonHooks/useResetStack';

interface LoginData {
  email: string;
  password: string;
}

const useLoginScreenHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginData, setLoginData] = useState<LoginData>({email:'', password:''})
  const dispatch = useDispatch();
  const resetStack = useResetStack()

  const onChangeText = (text:string, key: string) => {
    setLoginData({...loginData, [key]: text})
  }
  const onLogin = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await login(loginData.email, loginData.password);
      if (response) {
        await AsyncStorage.setItem('token', response?.token);
        dispatch(setUserData(response))
        resetStack('Auth');
      } else {
        setError('Invalid login credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return {
    onLogin,
    loading,
    error,
    loginData,
    setLoginData,
    onChangeText,
  };
};

export default useLoginScreenHook;
