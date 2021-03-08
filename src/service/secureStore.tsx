import * as SecureStore from 'expo-secure-store';

export interface User {
    id: string;
    email: string;
    familyName: string;
    name: string;
    givenName: string;
    photoUrl: string;
}

export const saveSecureStore = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  }

export const getSecureStore = async (key: string): Promise<User> => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return JSON.parse(result);
    } else {
        return null;
    }
};