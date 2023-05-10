import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_PROJECT_URL, REACT_APP_SUPABASE_PROJECT_PUBLIC_KEY } from "@env";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

console.dir({
  supabaseUrl: REACT_APP_SUPABASE_PROJECT_URL,
  supabaseAnonKey: REACT_APP_SUPABASE_PROJECT_PUBLIC_KEY,
});

const supabaseUrl = REACT_APP_SUPABASE_PROJECT_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_PROJECT_PUBLIC_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
