import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Tittle from "../componenets/ui/Tittle";
import Colors from "../constants/colors";
import PrimaryButton from "../componenets/ui/PrimaryButton";

const GameOverScreen = ({ roundNumber, userNumber, onStartGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <View style={styles.rootContainer}>
      <Tittle>Game Over!</Tittle>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.Image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.Highlight}>{roundNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.Highlight}>{userNumber}</Text>.{" "}
        </Text>
        <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  Highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
