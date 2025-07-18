import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserOnly>
      <SafeAreaView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.navBackground,
              height: 62,
              borderTopWidth: 0.5,
              borderTopColor: "#ccc",
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
          }}
        >
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={24}
                  name={focused ? "person" : "person-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="books"
            options={{
              title: "Books",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={24}
                  name={focused ? "book" : "book-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="create"
            options={{
              title: "Create",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  size={24}
                  name={focused ? "create" : "create-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </UserOnly>
  );
};

export default DashboardLayout;
