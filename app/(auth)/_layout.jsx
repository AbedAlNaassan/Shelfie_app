import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
};

export default AuthLayout;
