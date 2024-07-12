import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../config/Colors";

const GuessedNumber = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default memo(GuessedNumber);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.yellow500,
    width: wp(20),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.yellow500,
    textAlign: "center",
    fontSize: hp(3.5),
  },
});
