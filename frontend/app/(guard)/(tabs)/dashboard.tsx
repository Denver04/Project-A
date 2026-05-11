import { CustomText } from "@/components/CustomText";
import { View, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-reanimated/src/Animated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function GuardDashboard() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <CustomText style={styles.title}>Welcome, Guard!</CustomText>
        <CustomText style={styles.subtitle}>
          Manage your society and stay connected with residents.
        </CustomText>
        <View style={styles.emptyState}>
          <CustomText style={styles.emptyTitle}>No pending tasks</CustomText>
          <CustomText style={styles.emptyText}>
            You have no pending visitor requests or alerts. Check back here for
            updates.
          </CustomText>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => router.push("/(guard)/visitor-details")}
        >
          <CustomText style={styles.buttonText}>
            View Visitor Requests
          </CustomText>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eff1fc",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6b7280",
    fontSize: 15,
    marginBottom: 20,
  },
  emptyState: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 6,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
  },
  emptyText: {
    color: "#6b7280",
    fontSize: 14,
  },
  button: {
    marginTop: 24,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#4338ca",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

// Previous code with navigation items (commented out)};
