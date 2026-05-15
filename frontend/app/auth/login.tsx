import { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginInterface } from "@/Interface/authInterface";
import api from "@/services/api";

export default function Login() {
  const [credentials, setCredentials] = useState<loginInterface>({
    phoneNumer: "",
  });

  const handleLogin = () => {
    if (!credentials.phoneNumer) {
      alert("Please enter your phone number");
      return;
    } else if (credentials.phoneNumer.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    api.post("/user/login", credentials)
      .then((res) => {
        console.log("Login successful:", res.data);
        router.navigate("/auth/otpVerification");
      })
      .catch((err) => {
        console.error("Login failed:", err);
        alert("Login failed. Please check your phone number and try again.");
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Text style={styles.header}>Welcome Back! 👋</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              value={credentials.phoneNumer}
              onChangeText={(phoneNumer) =>
                setCredentials({ ...credentials, phoneNumer })
              }
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <Link href="/auth/signup" asChild>
                <Pressable>
                  <Text style={styles.registerLink}>Register Now</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f4fb",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  container: {
    width: "100%",
  },
  header: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    fontWeight: "900",
    marginBottom: 28,
  },
  label: {
    fontSize: 13,
    color: "#6b7280",
    fontWeight: "900",
    marginBottom: 10,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: "#f8fafc",
    color: "#111827",
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#4338ca",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  footerText: {
    color: "#6b7280",
    fontSize: 14,
  },
  registerLink: {
    color: "#4338ca",
    fontSize: 14,
    fontWeight: "700",
  },
});
