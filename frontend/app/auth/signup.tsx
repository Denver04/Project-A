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
    name: "",
    email: "",
    phoneNumer: "",
    flatNumber: "",
    societyName: "",
  });
  const router = useRouter();

  const handleSignup = () => {
    if (!credentials.name) {
      alert("Please enter your name");
      return;
    }

    if (!credentials.email) {
      alert("Please enter your email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!credentials.phoneNumer) {
      alert("Please enter your phone number");
      return;
    } else if (!/^\d{10}$/.test(credentials.phoneNumer)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!credentials.flatNumber) {
      alert("Please enter your flat number");
      return;
    }

    if (!credentials.societyName) {
      alert("Please enter your society name");
      return;
    }
    
    // Here you would typically make an API call to register the user 
    // and send the OTP to their phone number.
    router.navigate("/auth/otpVerification");
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
            <Text style={styles.header}>Create Account</Text>
            <Text style={styles.subtitle}>Fill in your details to continue</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
              value={credentials.name}
              onChangeText={(name) => setCredentials({ ...credentials, name })}
              placeholder="Enter your name"
              placeholderTextColor="#9ca3af"
              style={styles.input}
              autoFocus
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              value={credentials.email}
              onChangeText={(email) => setCredentials({ ...credentials, email })}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              placeholder="Enter your email"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              value={credentials.phoneNumer}
              onChangeText={(phoneNumer) =>
                setCredentials({ ...credentials, phoneNumer })
              }
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoComplete="tel"
              placeholder="Enter your phone number"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Text style={styles.label}>Flat Number</Text>
            <TextInput
              value={credentials.flatNumber}
              onChangeText={(flatNumber) =>
                setCredentials({ ...credentials, flatNumber })
              }
              placeholder="Enter your flat number"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Text style={styles.label}>Society Name</Text>
            <TextInput
              value={credentials.societyName}
              onChangeText={(societyName) =>
                setCredentials({ ...credentials, societyName })
              }
              placeholder="Enter your society name"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href="/auth/login" asChild>
                <Pressable>
                  <Text style={styles.registerLink}>Login</Text>
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
