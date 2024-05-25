import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useResetStack from '../../commonHooks/useResetStack';
import { Alert } from 'react-native';

const useSplaseScreen = () => {
 const resetStack = useResetStack();
  useEffect(() => {
    const checkToken = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const token = await AsyncStorage.getItem('token');
        if (token) {
            resetStack('Auth');
        } else {
            resetStack('NonAuth');
        }
      } catch (error) {
        Alert.alert('Error while fetching token')
      }
    };

    checkToken();
  }, []);
};

export default useSplaseScreen;
