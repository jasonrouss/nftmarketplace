import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.white , borderR}}>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
