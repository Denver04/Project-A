import { signupInterface } from "@/Interface/authInterface";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
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

export default function Signup() {
  const [credentials, setCredentials] = useState<signupInterface>({
    phoneNumer: "",
    email: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignup = () => {
    if (!credentials.name) {
      alert("Please enter your name");
      return;
    }

    if (!credentials.phoneNumer) {
      alert("Please enter your phone number");
      return;
    } else if (!/^\d{10}$/.test(credentials.phoneNumer)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!credentials.email) {
      alert("Please enter your email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      alert("Please enter a valid email address");
      return;
    }
    //api call to signup user
    //navigating to otp verification screen after successful signup

    router.navigate("/auth/otpVerification");
    console.log("Signup pressed", { credentials });
  };

  const handleGoogleSignup = () => {
    console.log("Continue with Google");
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
            <Text style={styles.header}>Create Account 🚀</Text>
            <Text style={styles.subtitle}>Join and start playing</Text>

            <TextInput
              value={credentials.name}
              onChangeText={(name) => setCredentials({ ...credentials, name })}
              placeholder="Enter your name"
              placeholderTextColor="#808080"
              style={styles.nameInput}
              keyboardType="default"
            />

            <TextInput
              value={credentials.phoneNumer}
              onChangeText={(phoneNumer) =>
                setCredentials({ ...credentials, phoneNumer })
              }
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoComplete="tel"
              placeholder="Enter your phone number"
              placeholderTextColor="#808080"
              style={styles.input}
            />

            <TextInput
              value={credentials.email}
              onChangeText={(email) =>
                setCredentials({ ...credentials, email })
              }
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              placeholder="Enter your email"
              placeholderTextColor="#808080"
              style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.line} />
            </View>

            <Pressable style={styles.googleButton} onPress={handleGoogleSignup}>
              <Text style={styles.googleIcon}>🔍</Text>
              <Text style={styles.googleText}>Continue with Google</Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href="/auth/login" asChild>
                <Pressable>
                  <Text style={styles.loginLink}>Login</Text>
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
    shadowColor: "#7c3aed",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 12,
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
    height: 48,
    borderColor: "#333344",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#252540",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#333344",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#252540",
    marginBottom: 20,
    paddingRight: 12,
  },
  nameInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
  },
  eyeIcon: {
    padding: 8,
  },
  eyeText: {
    fontSize: 18,
  },
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: "#7c3aed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#333344",
  },
  dividerText: {
    paddingHorizontal: 12,
    color: "#808090",
    fontSize: 13,
    fontWeight: "600",
  },
  googleButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333344",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    marginBottom: 20,
  },
  googleIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  googleText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  footerText: {
    color: "#a0a0b0",
    fontSize: 13,
    fontWeight: "500",
  },
  loginLink: {
    color: "#b084cc",
    fontSize: 13,
    fontWeight: "700",
  },
});
