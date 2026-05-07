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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpVerification() {
  const [otp, setOtp] = useState<otpVerificationInterface>({ otp: "" });
  const router = useRouter();

  const handleOtpVerification = () => {
    if (!otp.otp) {
      alert("Please enter the OTP");
      return;
    }
    if (otp.otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    router.navigate("/home");
    console.log("OTP Verification pressed", { otp });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <View style={styles.purpleCircle} />
        <View style={styles.goldCircle} />
      </View>
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
          <View style={styles.card}>
            <Text style={styles.header}>OTP Verification</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to your phone.
            </Text>

            <TextInput
              value={otp.otp}
              onChangeText={(text) => setOtp({ otp: text })}
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter OTP"
              autoFocus
              maxLength={6}
              placeholderTextColor="#808080"
            />

            <Pressable style={styles.button} onPress={handleOtpVerification}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Didn't receive a code?</Text>
              <Pressable>
                <Text style={styles.resendText}> Resend</Text>
              </Pressable>
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
    backgroundColor: "#0f0f1e",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#05030a",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    backgroundColor: "#05030a",
  },
  purpleCircle: {
    position: "absolute",
    top: -90,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(124, 58, 237, 0.18)",
  },
  goldCircle: {
    position: "absolute",
    bottom: -80,
    left: -50,
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "rgba(255, 193, 7, 0.16)",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    backgroundColor: "rgba(24, 16, 52, 0.96)",
    borderRadius: 16,
    padding: 28,
    borderWidth: 1,
    borderColor: "#7c3aed",
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#a0a0b0",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 56,
    borderColor: "#333344",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 18,
    backgroundColor: "#252540",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#7c3aed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
  },
  footerText: {
    color: "#a0a0b0",
    fontSize: 13,
  },
  resendText: {
    color: "#b084cc",
    fontSize: 13,
    fontWeight: "700",
  },
});
