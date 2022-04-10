import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >


        <Image source={assets.logo} resizeMode="contain0" style={{width: 90 , height: 25}}/>

        <View style={{width}}></View>
      </View>
    </View>
  );
};

export default HomeHeader;
