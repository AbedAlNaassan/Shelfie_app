import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Shelfie" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
