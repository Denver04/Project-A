import { CustomText } from "@/Components/CustomText";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <CustomText style={styles.title}>Profile</CustomText>
        <CustomText style={styles.subtitle}>View and update your resident details anytime.</CustomText>

        <View style={styles.profileCard}>
          <CustomText style={styles.label}>Name</CustomText>
          <CustomText style={styles.value}>Shivam</CustomText>
          <CustomText style={styles.label}>Flat</CustomText>
          <CustomText style={styles.value}>A-302</CustomText>
          <CustomText style={styles.label}>Society</CustomText>
          <CustomText style={styles.value}>Green View Society</CustomText>
        </View>

        <View style={styles.profileCard}>
          <CustomText style={styles.cardTitle}>Account</CustomText>
          <CustomText style={styles.cardText}>Manage notifications, security settings, and personal details.</CustomText>
        </View>
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
  profileCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 6,
  },
  label: {
    color: "#6b7280",
    fontSize: 13,
    marginTop: 12,
  },
  value: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
  },
  cardText: {
    color: "#6b7280",
    fontSize: 14,
    lineHeight: 20,
  },
});
