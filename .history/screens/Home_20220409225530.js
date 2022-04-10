import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <FocusedStatusBar background  />
    </SafeAreaView>
  );
};

export default Home;
