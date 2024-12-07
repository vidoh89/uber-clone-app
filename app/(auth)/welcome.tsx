import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1  justify-center bg-white">
      <Text className="w-full  text-center  text-blue-700">Uber Clone</Text>
    </SafeAreaView>
  );
};
export default Onboarding;
