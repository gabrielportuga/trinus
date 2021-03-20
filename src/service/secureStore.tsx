import * as SecureStore from 'expo-secure-store';
import { UserGoogle } from '../models/userGoogle';

export const saveSecureStore = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
};

export const getSecureStore = async (key: string): Promise<UserGoogle> => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return JSON.parse(result);
    } else {
        return null;
    }
};