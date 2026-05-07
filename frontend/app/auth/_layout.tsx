import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#291d52",
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
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="otpVerification"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}
