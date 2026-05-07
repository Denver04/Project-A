import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#1e1e1e",
        },
        headerTintColor: "#4db8ff",
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 16,
          color: "#e0e0e0",
        },
        contentStyle: {
          backgroundColor: "#121212",
        },
      }}>
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
        <Stack.Screen name="otp-verification" options={{ title: "OTP Verification" }} />
      </Stack>
  );
}

