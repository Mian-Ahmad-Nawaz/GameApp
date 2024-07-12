import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { memo } from "react";

import Colors from "../config/Colors";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default memo(SubTitle);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.8),
  },
  text: {
    textAlign: "center",
    fontFamily: "openSans-Regular",
    color: Colors.yellow500,
    fontSize: hp(2.5),
  },
});
