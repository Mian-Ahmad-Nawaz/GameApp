import { Alert, BackHandler, StyleSheet, TextInput, View } from "react-native";
import { useCallback, useEffect } from "react";
import { useUserNumberContext } from "../store/userNumber-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { debounce } from "lodash";

import BackgroundScreen from "./BackgroundScreen";
import Colors from "../config/Colors";
import Card from "../components/Card";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";

const GameStartScreen = ({ navigation }) => {
  const { userNumber, setUserNumber, inpRef, resetUserNumber } =
    useUserNumberContext();

  // prevent to going back
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to exit", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Exit",
          style: "destructive",
          onPress: () => {
            BackHandler.exitApp();
            setUserNumber(null);
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const onResetHandler = useCallback(() => {
    resetUserNumber();
  }, []);

  const onConfirmHandler = useCallback(() => {
    const num = parseInt(userNumber);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99. ",
        [{ text: "Okay", style: "destructive" }]
      );
    } else {
      navigation.navigate("gameScreen", { userNumber });
    }
  }, [userNumber]);

  const userNumberChangeHandler = useCallback(
    debounce((txt) => {
      setUserNumber(txt);
    }, 100),
    []
  );

  return (
    <BackgroundScreen>
      <Title>Guess My Number</Title>
      <Card>
        <SubTitle>Enter a Number</SubTitle>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          autoCapitalize="none"
          onChangeText={(txt) => userNumberChangeHandler(txt)}
          returnKeyType="done"
          ref={inpRef}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <MyButton onPress={onResetHandler}>Reset</MyButton>
          </View>
          <View style={styles.btnContainer}>
            <MyButton onPress={onConfirmHandler}>Confirm</MyButton>
          </View>
        </View>
      </Card>
    </BackgroundScreen>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: Colors.yellow500,
    fontSize: hp(3.5),
    color: Colors.yellow500,
    textAlign: "center",
    width: wp(20),
  },
  btnsContainer: {
    flexDirection: "row",
    gap: wp(4),
  },
  btnContainer: {
    flex: 1,
  },
});
