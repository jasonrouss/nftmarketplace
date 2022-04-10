import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS ,SIZES,FONTS,SHADOWS} from "../constants";

export const CircleButton = () => {
  return (
    <TouchableOpacity
      style={{ width: 40, height: 40, backgroundColor: COLORS.white , position: 'absolute', borderRadius: SIZES.extraLarge, }}
    ></TouchableOpacity>
  );
};
export const RectButton = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};
