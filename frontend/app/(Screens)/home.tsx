import { CustomText } from "@/Components/CustomText";
import { View, Pressable, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <View>
            <CustomText style={styles.title}>Hi, Shivam</CustomText>
            <CustomText style={styles.subtitle}>
              A-302, Green View Society
            </CustomText>
          </View>
        </View>

        <View style={styles.approvalCard}>
          <View style={styles.approvalInfo}>
            <CustomText style={styles.cardHeading}>
              Pending Approvals
            </CustomText>
            <CustomText style={styles.pendingCount}>01</CustomText>
            <CustomText style={styles.cardDescription}>
              Visitor waiting for your approval
            </CustomText>
          </View>
          <View style={styles.approvalIllustration}>
            <View style={styles.approvalShape} />
          </View>
        </View>

        <CustomText style={styles.sectionTitle}>Quick Actions</CustomText>
        <View style={styles.actionsRow}>
          <View style={[styles.actionCard, styles.actionGreen]}>
            <CustomText style={styles.actionIcon}>✓</CustomText>
            <CustomText style={styles.actionLabel}>Approve Visitors</CustomText>
          </View>
          <View style={[styles.actionCard, styles.actionPurple]}>
            <CustomText style={styles.actionIcon}>👥</CustomText>
            <CustomText style={styles.actionLabel}>
              Pre-Approve Guest
            </CustomText>
          </View>
          <View style={[styles.actionCard, styles.actionOrange]}>
            <CustomText style={styles.actionIcon}>📦</CustomText>
            <CustomText style={styles.actionLabel}>Delivery Entries</CustomText>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <CustomText style={styles.activityTitle}>
              Today's Activity
            </CustomText>
            <Pressable>
              <CustomText style={styles.viewAll}>View All</CustomText>
            </Pressable>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.avatar}>
              <CustomText style={styles.avatarText}>RS</CustomText>
            </View>
            <View style={styles.activityText}>
              <CustomText style={styles.activityName}>
                Visitor Request
              </CustomText>
              <CustomText style={styles.activitySub}>Rahul Sharma</CustomText>
            </View>
            <View style={styles.statusBlock}>
              <CustomText style={styles.activityTime}>02:30 PM</CustomText>
              <CustomText style={styles.statusBadge}>Pending</CustomText>
            </View>
          </View>
        </View>

        {/* <View style={styles.bottomNav}>
          <View style={styles.navItemActive}>
            <CustomText style={styles.navIcon}>🏠</CustomText>
            <CustomText style={styles.navLabelActive}>Home</CustomText>
          </View>
          <View style={styles.navItem}>
            <CustomText style={styles.navIcon}>👥</CustomText>
            <CustomText style={styles.navLabel}>Visitors</CustomText>
          </View>
          <View style={styles.navItem}>
            <CustomText style={styles.navIcon}>🔔</CustomText>
            <CustomText style={styles.navLabel}>Notifications</CustomText>
          </View>
          <View style={styles.navItem}>
            <CustomText style={styles.navIcon}>👤</CustomText>
            <CustomText style={styles.navLabel}>Profile</CustomText>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eff1fc",
  },
  screen: {
    padding: 20,
    paddingBottom: 32,
    backgroundColor: "#eff1fc",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "700",
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  notificationIcon: {
    fontSize: 20,
  },
  badgeDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f97316",
  },
  approvalCard: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 12,
  },
  approvalInfo: {
    flex: 1,
    paddingRight: 12,
  },
  cardHeading: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 14,
  },
  pendingCount: {
    fontSize: 48,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 12,
  },
  cardDescription: {
    color: "#6b7280",
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 170,
  },
  approvalIllustration: {
    width: 110,
    height: 110,
    borderRadius: 24,
    backgroundColor: "#eef3ff",
    justifyContent: "center",
    alignItems: "center",
  },
  approvalShape: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#4f46e5",
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionCard: {
    width: "31%",
    borderRadius: 22,
    padding: 16,
    alignItems: "center",
    minHeight: 132,
    justifyContent: "space-between",
  },
  actionGreen: {
    backgroundColor: "#ecfdf5",
  },
  actionPurple: {
    backgroundColor: "#eef2ff",
  },
  actionOrange: {
    backgroundColor: "#fff7ed",
  },
  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(71, 85, 255, 0.14)",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 42,
    fontSize: 20,
    marginBottom: 14,
    color: "#111827",
  },
  actionLabel: {
    color: "#111827",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 18,
  },
  activityCard: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 12,
    marginBottom: 24,
  },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  activityTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "800",
  },
  viewAll: {
    color: "#4338ca",
    fontSize: 13,
    fontWeight: "700",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 22,
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#4338ca",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
  activityText: {
    flex: 1,
  },
  activityName: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 2,
  },
  activitySub: {
    color: "#6b7280",
    fontSize: 13,
  },
  statusBlock: {
    alignItems: "flex-end",
  },
  activityTime: {
    color: "#6b7280",
    fontSize: 12,
    marginBottom: 8,
  },
  statusBadge: {
    color: "#f97316",
    fontSize: 12,
    fontWeight: "700",
    backgroundColor: "#ffedd5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    overflow: "hidden",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.05,
    shadowRadius: 24,
    elevation: 8,
  },
  navItem: {
    alignItems: "center",
    width: "23%",
  },
  navItemActive: {
    alignItems: "center",
    width: "23%",
    backgroundColor: "#eef2ff",
    borderRadius: 18,
    paddingVertical: 10,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 11,
    color: "#6b7280",
  },
  navLabelActive: {
    fontSize: 11,
    color: "#4338ca",
    fontWeight: "700",
  },
});
