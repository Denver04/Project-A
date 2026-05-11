import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function GuardTabsLayout() {
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
          name="dashboard"
          options={{
            title: "dashboard",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="dashboard" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="add-visitor"
          options={{
            title: "add-visitor",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="plus" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="visitors"
          options={{
            title: "visitors",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="users" color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
