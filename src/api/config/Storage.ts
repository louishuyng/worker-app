import AsyncStorage from '@react-native-community/async-storage';

export const setSessionid = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getSessionId = async (key: string) => {
  return AsyncStorage.getItem(key);
};

export const clearStorage = async () => {
  await AsyncStorage.clear();
};
