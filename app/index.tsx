import { View, Text } from "react-native";
import { Redirect } from "expo-router";
import "../global.css";
const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};
export default Home;
