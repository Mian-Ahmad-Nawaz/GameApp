import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { UserNumberContextProvider } from "./app/store/userNumber-context";
const Stack = createNativeStackNavigator();

import GameStartScreen from "./app/screens/GameStartScreen";
import GameScreen from "./app/screens/GameScreen";
import BackgroundScreen from "./app/screens/BackgroundScreen";
import GameOverScreen from "./app/screens/GameOverScreen";

export default function App() {
  const [fontLoading] = useFonts({
    "openSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
    "openSans-Regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontLoading) {
    return <BackgroundScreen />;
  }

  return (
    <UserNumberContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
          initialRouteName="gameStartScreen"
        >
          <Stack.Screen name="gameStartScreen" component={GameStartScreen} />
          <Stack.Screen name="gameScreen" component={GameScreen} />
          <Stack.Screen name="gameOverScreen" component={GameOverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserNumberContextProvider>
  );
}
