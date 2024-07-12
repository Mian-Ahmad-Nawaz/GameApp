import { Alert, BackHandler, FlatList, StyleSheet, View } from "react-native";
import { memo, useEffect, useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useUserNumberContext } from "../store/userNumber-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import Card from "../components/Card";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";
import GuessedNumber from "../components/GuessedNumber";
import GuessList from "../components/GuessList";

const GameScreen = ({ navigation }) => {
  const { userNumber, resetUserNumber } = useUserNumberContext();

  // prevent to going back give alert that you want to exit or restart
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Exit or Restart?",
        "Do you want to exit the app or restart the game?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Exit",
            onPress: () => {
              BackHandler.exitApp();
              navigation.navigate("gameStartScreen");
              resetUserNumber();
            },
          },
          {
            text: "Restart",
            onPress: () => {
              navigation.navigate("gameStartScreen");
              resetUserNumber();
            },
          },
        ]
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  // initial guesses number
  const [minGuess, setMinGuess] = useState(1);
  const [maxGuess, setMaxGuess] = useState(99);

  // guess number function
  const guessRndNumber = (min, max, number) => {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    if (number === num) {
      return guessRndNumber(min, max, number);
    } else {
      return num;
    }
  };

  // initial guess
  const intialGuess = guessRndNumber(minGuess, maxGuess, userNumber);
  // guess number state
  const [guessedNumber, setGuessedNumber] = useState(intialGuess);
  // total guess
  const [totalGuess, setTotalGuess] = useState([guessedNumber]);
  //length of total guess
  const totalGuessLength = useMemo(() => totalGuess.length, [totalGuess]);

  // function for button to guess a number high or low
  const onGuess = (whichGuess) => {
    if (userNumber == guessedNumber) {
      return;
    }
    //whichGuess is high or low
    if (
      (whichGuess === "low" && guessedNumber < userNumber) ||
      (whichGuess === "high" && guessedNumber > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    //condition for low
    else if (whichGuess === "low") {
      setMaxGuess(guessedNumber - 1);
    }
    // condition for high
    else if (whichGuess === "high") {
      setMinGuess(guessedNumber + 1);
    }
  };

  useEffect(() => {
    // this condition do not change the initial guess on first render
    if (minGuess != 1 || maxGuess != 99) {
      const rndNumber = guessRndNumber(minGuess, maxGuess, guessedNumber);
      setGuessedNumber(rndNumber);
      setTotalGuess((preGuess) => [rndNumber, ...preGuess]);
    }
  }, [minGuess, maxGuess]);

  // game over
  useEffect(() => {
    if (userNumber == guessedNumber) {
      navigation.navigate("gameOverScreen", {
        userNumber,
        totalGuessLength,
      });
    }
  }, [guessedNumber]);
  return (
    <BackgroundScreen>
      <Title>Opponent's Guess</Title>
      <Card>
        <SubTitle>Higher or lower?</SubTitle>
        <GuessedNumber>{guessedNumber}</GuessedNumber>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <MyButton onPress={() => onGuess("low")}>
              <Ionicons name="remove" size={hp(2.4)} color="#fff" />
            </MyButton>
          </View>
          <View style={styles.btnContainer}>
            <MyButton onPress={() => onGuess("high")}>
              <Ionicons name="add" size={hp(2)} color="#fff" />
            </MyButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={totalGuess}
        renderItem={({ item, index }) => {
          return (
            <GuessList ListGuess={item} listNumber={totalGuessLength - index} />
          );
        }}
      />
    </BackgroundScreen>
  );
};

export default memo(GameScreen);

const styles = StyleSheet.create({
  btnsContainer: {
    flexDirection: "row",
    gap: wp(4),
  },
  btnContainer: {
    flex: 1,
  },
});
