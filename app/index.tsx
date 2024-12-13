import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import { useEffect } from "react";

export default function index() {
  const router = useRouter();
  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const userInfo = await AsyncStorage.getItem("userInfo");
      if (token != null && userInfo != null) {
        router.push("/(tabs)/home");
      } else {
        router.push("/(auth)/login");
      }
    } catch (e) {
      console.error("Error retrieving userToken", e);
      router.push("/(auth)/login");
    }
  };
  useFocusEffect(() => {
    getUserToken();
  });
  return;
}
