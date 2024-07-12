import { StyleSheet, Text } from "react-native";

export default function MyText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSans-Regular",
  },
});
