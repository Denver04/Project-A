import { signupInterface } from "@/Interface/authInterface";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Signup() {
  const [userDetails, setUserDetails] = useState<signupInterface>({
    phoneNumer: "",
    name: "",
    email: "",
  });
  const router = useRouter();

  const handleSignup = () => {
    if (!userDetails.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userDetails.email.trim()) {
      alert("Please enter your email.");
      return;
    } else if (!emailRegex.test(userDetails.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!userDetails.phoneNumer) {
      alert("Please enter your phone number.");
      return;
    } else if (userDetails.phoneNumer.length !== 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    router.navigate("/auth/otpVerification");
    console.log("Signup pressed", { userDetails });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          value={userDetails.name}
          onChangeText={(inputName) =>
            setUserDetails((prev) => ({ ...prev, name: inputName }))
          }
          keyboardType="default"
          autoCapitalize="none"
          autoComplete="name"
          placeholder="Name"
          placeholderTextColor="#808080"
          style={styles.input}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={userDetails.phoneNumer}
          onChangeText={(inputNumber) =>
            setUserDetails((prev) => ({ ...prev, phoneNumer: inputNumber }))
          }
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
          placeholder="Phone Number"
          placeholderTextColor="#808080"
          style={styles.input}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={userDetails.email}
          onChangeText={(inputEmail) =>
            setUserDetails((prev) => ({ ...prev, email: inputEmail }))
          }
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Email"
          placeholderTextColor="#808080"
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#121212",
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: "#333333",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    color: "#e0e0e0",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#b0b0b0",
  },
  input: {
    height: 48,
    borderColor: "#404040",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: 18,
    backgroundColor: "#262626",
    color: "#e0e0e0",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    height: 48,
    borderRadius: 6,
    backgroundColor: "#4db8ff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    width: "100%",
    borderWidth: 0,
  },
  buttonText: {
    color: "#1a1a2e",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
