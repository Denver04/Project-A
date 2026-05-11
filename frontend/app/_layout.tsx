import { Redirect, Slot, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { RoleType } from "@/Enum/RoleType";

function RootNavigator() {
  const { auth } = useAuth();

  const segments = useSegments();

  const inAuthGroup = segments[0] === "auth";
  const inGuardGroup = segments[0] === "(guard)";
  const inUserGroup = segments[0] === "(user)";

  // =========================
  // NOT LOGGED IN
  // =========================
  // if (!auth.token) {
  //   // Allow auth routes only
  //   if (!inAuthGroup) {
  //     return <Redirect href="/auth/login" />;
  //   }

  //   return <Slot />;
  // }

  // =========================
  // GUARD LOGGED IN
  // =========================
  if (auth.role === RoleType.GUARD) {
    // Already inside guard routes
    if (inGuardGroup) {
      return <Slot />;
    }

    // Redirect to guard dashboard
    return <Redirect href="/(guard)/(tabs)/dashboard" />;
  }

  // =========================
  // USER LOGGED IN
  // =========================
  if (auth.role === RoleType.USER) {
    // Already inside user routes
    if (inUserGroup) {
      return <Slot />;
    }

    // Redirect to user home
    return <Redirect href="/(user)/home" />;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
