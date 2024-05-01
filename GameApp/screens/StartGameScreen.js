import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../componenets/ui/PrimaryButton";
import Colors from "../constants/colors";
import Tittle from "../componenets/ui/Tittle";
import Card from "../componenets/ui/Card";
import InstructionText from "../componenets/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  // State to manage the entered number
  const [enteredNumber, setEnterNumber] = useState("");

  // Get the window dimensions
  const { width, height } = useWindowDimensions();

  // Reset the input field
  const resetInputHandler = () => {
    setEnterNumber("");
  };

  // Handle changes in the number input field
  const numberInputHandler = (enteredText) => {
    setEnterNumber(enteredText);
  };

  // Handle confirmation of the entered number
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  // Calculate marginTop distance based on window height
  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Tittle>Guess My Number</Tittle>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
