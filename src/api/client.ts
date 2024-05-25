import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const client = axios.create({
    timeout: 200000, // NOTE: increase timeout to avoid timeout in slow local development
    baseURL: `${BASE_URL}/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

client.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('Token');
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

client.interceptors.response.use(async config => {
    return config;
}, async err => {
    return Promise.reject(err);
});

export default client;
