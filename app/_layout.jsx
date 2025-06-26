import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Stack />
      </View>
    </SafeAreaProvider>
  );
}
