import { StyleSheet, Text } from "react-native";

import Colors from "../config/Colors";

export default function MyBoldText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSans-Bold",
    color: Colors.blue500,
  },
});
