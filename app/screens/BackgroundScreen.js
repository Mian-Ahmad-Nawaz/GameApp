import { ImageBackground, View } from "react-native";
import { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../config/Colors";
import Constants from "expo-constants";

const BackgroundScreen = ({ children }) => {
  return (
    <LinearGradient
      colors={[Colors.blue500, Colors.yellow500]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/images/dice2.jpg")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <View
          style={{
            paddingTop: Constants.statusBarHeight + hp(3),
            flex: 1,
            gap: hp(3),
            paddingHorizontal: wp(4),
          }}
        >
          {children}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default memo(BackgroundScreen);
