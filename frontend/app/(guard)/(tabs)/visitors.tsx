import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Visitors() {
  return (
    <SafeAreaView>
      <Button
        title="Open Visitor Details"
        onPress={() => router.push("/(guard)/visitor-details")}
      />
    </SafeAreaView>
  );
}
