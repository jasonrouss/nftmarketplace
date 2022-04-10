import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
        <View
          style={{
            position: absolute,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, background: COLORS.primary }}/>
          <View style={{ flex: 1, background: COLORS.white }}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
