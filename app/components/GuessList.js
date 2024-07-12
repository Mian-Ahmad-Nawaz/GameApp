import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../config/Colors";

const GuessList = ({ listNumber, ListGuess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>#{listNumber}</Text>
      <Text style={styles.txt}>Opponent's Guess : {ListGuess}</Text>
    </View>
  );
};

export default memo(GuessList);

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: Colors.yellow500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(3.6),
    marginBottom: hp(1.4),
  },
  txt: {
    fontSize: hp(1.75),
  },
});
