import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../config/Colors";

const MyButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnContainer}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default memo(MyButton);

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.blue400,
    borderRadius: 28,
    elevation: 4,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: wp(1),
    paddingVertical: hp(0.8),
    height: hp(4.5),
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: Colors.white500,
    fontFamily: "openSans-Regular",
    fontSize: hp(1.8),
  },
});
