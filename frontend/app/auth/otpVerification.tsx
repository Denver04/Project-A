import { otpVerificationInterface } from "@/Interface/authInterface";
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
} from "react-native";

export default function OtpVerification() {
  const [otp, setOtp] = useState<otpVerificationInterface>({ otp: "" });
  const router = useRouter();

  const handleOtpverification = () => {
    if (!otp.otp) {
      alert("Please enter the OTP");
      return;
    } else if (otp.otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    //api call to verify otp
    //navigating to home screen after successful otp verification
    router.navigate("/");
    console.log("OTP Verification pressed", { otp });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to your phone number.
      </Text>
      <TextInput
        value={otp.otp}
        onChangeText={(text) => setOtp({ otp: text })}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="OTP"
        autoFocus
        maxLength={6}
        placeholderTextColor="#808080"
      />

      <Pressable style={styles.button} onPress={handleOtpverification}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#e0e0e0",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#b0b0b0",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 48,
    borderColor: "#404040",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 14,
    backgroundColor: "#262626",
    color: "#e0e0e0",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 32,
    paddingVertical: 14,
    backgroundColor: "#4db8ff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  buttonText: {
    color: "#1a1a2e",
    fontSize: 16,
    fontWeight: "700",
  },
});
