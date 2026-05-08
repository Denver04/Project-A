import { useState } from "react";
import { useRouter } from "expo-router";
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

const OTP_LENGTH = 4;

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    if (otp.length !== OTP_LENGTH) {
      alert("Please enter the 4-digit OTP");
      return;
    }
    router.navigate("/home");
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
          <View style={styles.content}>
            <Text style={styles.header}>Enter OTP</Text>
            <Text style={styles.subtitle}>We have sent a 4 digit code to</Text>
            <Text style={styles.phoneNumber}>{"+91 98765 43210"}</Text>

            <TextInput
              value={otp}
              onChangeText={(text) => setOtp(text.replace(/[^0-9]/g, ""))}
              keyboardType="number-pad"
              maxLength={OTP_LENGTH}
              placeholder="Enter OTP"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleVerify}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </Pressable>

            <Text style={styles.resendText}>Resend OTP in 00:30</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f7fb",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  content: {
    width: "100%",
  },
  header: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 6,
    fontWeight: "900",
  },
  phoneNumber: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    maxHeight: 56,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 16,
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 4,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  button: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#4d3df9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  resendText: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
});
