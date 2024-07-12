import { StyleSheet, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../config/Colors";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default memo(Card);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    gap: hp(2),
    alignItems: "center",
    justifyContent: "center",
  },
});
