import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

const StatusBar = ({ children }) => {
  return <SafeAreaView style={styles.statusBar}>{children}</SafeAreaView>;
};

export default StatusBar;

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
