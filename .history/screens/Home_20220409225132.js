import { View, SafeAreaView, FlatList, Text } from "react-native";
import { COLORS, NFTData } from "../constants";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
const Home = () => {
  return <SafeAreaView style={{ flex: 1 }}>

    <FocusedStatusBar background/>
  </SafeAreaView>;
};

export default Home;
