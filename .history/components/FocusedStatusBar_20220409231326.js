import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

import React from "react";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return (
    <View>
      <Text>isFocused? <StatusBar a</Text>
    </View>
  );
};

export default FocusedStatusBar;
