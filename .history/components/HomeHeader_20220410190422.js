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
        <Image
          source={assets.logo}
          resizeMode="contain0"
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 50,
              height: 5,
              bottom: 0,
              position: "absolute",
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontFamily: FONTS.regular , fontSize: SIZES.small, color: COLORS.white}}>Hello, Victoria </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
