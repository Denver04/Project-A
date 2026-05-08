import { View, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { CustomText } from "@/Components/CustomText";

export default function Main() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/splash_image.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textBlock}>
        <CustomText style={styles.title}>SafeSociety</CustomText>
        <CustomText style={styles.subtitle}>Secure Community Living</CustomText>
      </View>

      <View style={styles.loaderSection}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
        <CustomText style={styles.loadingText}>Loading...</CustomText>
      </View>

      <Pressable
        onPress={() => router.navigate("/auth/login")}
      >
        <CustomText>Go to Login</CustomText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 24,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 32,
  },
  textBlock: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#14142b",
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#5f5f7a",
    fontWeight: "500",
  },
  loaderSection: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  progressBarBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "#e9e9f0",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressBarFill: {
    width: "55%",
    height: "100%",
    backgroundColor: "#6a5cff",
    borderRadius: 999,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: "#5f5f7a",
    fontWeight: "600",
  },
});
