import { Link, router } from "expo-router";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

export default function Main() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.purpleCircle} />
        <View style={styles.goldCircle} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.titlePart, styles.rock]}>ROCK</Text>
        <Text style={[styles.titlePart, styles.paper]}>PAPER</Text>
        <Text style={[styles.titlePart, styles.scissors]}>SCISSORS</Text>
      </View>

        <Pressable onPress={() => router.navigate("/auth/login")}>
          <Text style={styles.enterGameText}>Enter Game</Text>
        </Pressable>


      <View style={styles.spacer} />

      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4db8ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a1a",
    padding: 24,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  titlePart: {
    fontSize: 48,
    fontWeight: "800",
    letterSpacing: 2,
    lineHeight: 56,
  },
  rock: {
    color: "#d0d0d0",
    fontWeight: "900",
  },
  paper: {
    color: "#ffc107",
    fontWeight: "900",
  },
  scissors: {
    color: "#4db8ff",
    fontWeight: "900",
  },
  spacer: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#f7c948",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  enterGameText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
    backgroundColor: "rgba(124, 58, 237, 0.95)",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    overflow: "hidden",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    backgroundColor: "#05030a",
  },
  purpleCircle: {
    position: "absolute",
    top: -80,
    right: -90,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(124, 58, 237, 0.18)",
  },
  goldCircle: {
    position: "absolute",
    bottom: -70,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255, 193, 7, 0.16)",
  },
});
