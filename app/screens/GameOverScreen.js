import { Image, StyleSheet, View } from "react-native";
import { useCallback } from "react";
import { useUserNumberContext } from "../store/userNumber-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import MyText from "../components/MyText";
import MyBoldText from "../components/MyBoldText";
import MyButton from "../components/MyButton";

export default function GameOverScreen({ navigation, route }) {
  const { resetUserNumber } = useUserNumberContext();

  const { userNumber } = route.params;
  const { totalGuessLength } = route.params;

  const handleRestartGame = useCallback(() => {
    navigation.navigate("gameStartScreen");
    resetUserNumber();
  }, []);

  return (
    <BackgroundScreen>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <MyText style={styles.txt}>
        Your phone needed <MyBoldText>{totalGuessLength}</MyBoldText> rounds to
        guess the number <MyBoldText>{userNumber}</MyBoldText>
      </MyText>
      <MyButton onPress={handleRestartGame}>Start New Game</MyButton>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 300,
    borderWidth: 2,
    alignSelf: "center",
    width: hp(40),
    height: hp(40),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  txt: {
    fontSize: hp(2.4),
    textAlign: "center",
  },
});
