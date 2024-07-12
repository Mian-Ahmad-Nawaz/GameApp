import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";

// width of mobile window
const windowWidth = Dimensions.get("window").width;

export default function Screen({ children, style }) {
  // dynamic width of mobile screen
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop:
            windowWidth < 380 ? (width > 500 ? 10 : 15) : width > 500 ? 10 : 35,
          // gap:
          //   windowWidth < 380 ? (width > 500 ? 10 : 20) : width > 500 ? 15 : 35,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowWidth < 380 ? 15 : 20,
    paddingBottom: 10,
  },
});
