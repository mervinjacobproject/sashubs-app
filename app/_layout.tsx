// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack, useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }
//  app/_layout.js

// import React, { useState, useEffect, createContext, useContext } from "react";
// import { Slot, useRouter } from "expo-router";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default function Layout() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.replace("/(auth)/login"); // Redirect to login if not authenticated
//     } else {
//       router.replace("/(tabs)"); // Redirect to tabs if authenticated
//     }
//   }, [isLoggedIn]);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       <Slot />
//     </AuthContext.Provider>
//   );
// // }
// import { Tabs } from "expo-router";
// import React, { useContext, useEffect } from "react";

// import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import CommonDataProvider from "@/components/contexts/commonDataContext/commonDataProvider";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import CommonDataContext from "@/components/contexts/commonDataContext";

// export default function TabLayout() {
//   const router = useRouter();
//   const colorScheme = useColorScheme();

//   return (
//     <CommonDataProvider>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="index" options={{ headerShown: false }} />
//           <Stack.Screen name="explore" options={{ headerShown: false }} />
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="+not-found" />
//         </Stack>
//       </ThemeProvider>
//     </CommonDataProvider>
//   );
// }

import React from "react";
import CommonDataProvider from "@/components/contexts/commonDataContext/commonDataProvider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <CommonDataProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CommonDataProvider>
  );
}
