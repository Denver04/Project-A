import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#4d3df9",
          tabBarInactiveTintColor: "#6b7280",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "800",
            // marginBottom: 4,
          },
          tabBarStyle: {
            height: 72,
            padding: 8,
            borderTopWidth: 1,
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.05,
            shadowRadius: 24,
            elevation: 8,
            borderEndStartRadius: 24,
            borderTopStartRadius: 24,
          },
          tabBarItemStyle: {
            paddingVertical: 6,
            paddingHorizontal: 4,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "Notifications",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="bell" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="visitors"
          options={{
            title: "Visitors",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="users" color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
