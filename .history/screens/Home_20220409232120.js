import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>

        <View style={{zIndex:0}}>
          <FlatList data={NFTData} renderItem={({item})=>{
<Text></Text></Text>

          }}/>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
