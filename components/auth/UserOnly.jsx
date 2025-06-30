import { Text } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return children;
};

export default UserOnly;
