import { StyleSheet, Text, View } from "react-native";

const Tittle = ({ children }) => {
  return (
    <View>
      <Text style={styles.tittle}>{children}</Text>
    </View>
  );
};

export default Tittle;

const styles = StyleSheet.create({
  tittle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
