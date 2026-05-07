import { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { loginInterface } from "@/Interface/authInterface";

export default function Login() {
  const [phoneNo, setPhoneNo] = useState<loginInterface>({ phoneNumer: "" });

  const handleChangePhoneNumber = (enteredPhoneNo: string) => {
    setPhoneNo({ phoneNumer: enteredPhoneNo });
  };

  const handleLogin = () => {
    if (!phoneNo.phoneNumer) {
      alert("Please enter your phone number");
      return;
    } else if (phoneNo.phoneNumer.length !== 10) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log("Login pressed", { phoneNo });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={phoneNo.phoneNumer}
          onChangeText={handleChangePhoneNumber}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
          autoFocus
          placeholder="Phone Number"
          placeholderTextColor="#808080"
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>New user?</Text>
          <Link href="/auth/signup" style={styles.signUpLink}>
            Sign up
          </Link>
        </View>
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
    borderWidth: 0,
  },
    buttonText: {
    color: "#1a1a2e",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#a0d8f7",
    fontSize: 14,
    marginRight: 6,
    fontWeight: "600",
  },
  signUpLink: {
    color: "#ff69b4",
    fontSize: 14,
    fontWeight: "700",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
});
