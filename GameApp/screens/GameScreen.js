import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Tittle from "../componenets/ui/Tittle";
import NumberContainer from "../componenets/game/NumberContainer";
import PrimaryButton from "../componenets/ui/PrimaryButton";
import Card from "../componenets/ui/Card";
import InstructionText from "../componenets/ui/InstructionText";
import GuessLogItems from "../componenets/game/GuessLogItems";

import { Ionicons } from "@expo/vector-icons";

// Function to generate a random number between min and max excluding the 'exclude' number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// Initial boundaries for the guessing range
let minBoundary = 1;
let maxBoundary = 100;

// GameScreen component
const GameScreen = ({ userNumber, onGameOver }) => {
  // Initial guess generated
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  // State to manage the current guess
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // State to store the guess rounds
  const [guessRound, setGuessRound] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  // Effect to check if the game is over
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // Effect to reset the boundaries when component mounts
  useEffect(() => {
    minBoundary = 1;
    maxBoundary: 100;
  }, []);

  // Function to handle the next guess
  const nextGuestHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong.... ", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  // Length of the guess round list
  const guessRoundListLength = guessRound.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuestHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Tittle>Opponents's Guess</Tittle>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRound}
          renderItem={(itemsData) => (
            <GuessLogItems
              roundNumber={guessRoundListLength - itemsData.index}
              guess={itemsData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
