import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { memo } from "react";

import Colors from "../config/Colors";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default memo(Title);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.white500,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.8),
  },
  text: {
    textAlign: "center",
    fontFamily: "openSans-Bold",
    color: Colors.white500,
    fontSize: hp(3),
  },
});
