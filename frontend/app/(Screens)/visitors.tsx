import { CustomText } from "@/Components/CustomText";
import {ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VisitorsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <CustomText style={styles.title}>Visitors</CustomText>
        <CustomText style={styles.subtitle}>Manage visitor approvals and guest entries from one place.</CustomText>

        <View style={styles.card}>
          <CustomText style={styles.cardTitle}>Upcoming visitors</CustomText>
          <CustomText style={styles.cardText}>No visitors waiting at the moment.</CustomText>
        </View>

        <View style={styles.card}>
          <CustomText style={styles.cardTitle}>Pre-approve guests</CustomText>
          <CustomText style={styles.cardText}>Create a quick approval for relatives, cleaners, or delivery partners.</CustomText>
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
  card: {
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
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
  },
  cardText: {
    color: "#6b7280",
    fontSize: 14,
    lineHeight: 20,
  },
});
