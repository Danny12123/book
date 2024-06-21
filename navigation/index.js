import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./BottomTabNavigator";
import SpotlightItems from "../screens/Spotlight";
import Lyrics from "../screens/Lyrics";
import SpotlightSong from "../screens/SpotlightSong";
import LinkingConfiguration from "./LinkingConfiguration";
import OnBoarding from "../screens/Onboarding";
import HomeAuth from "../screens/Account/HomeAuth";
import Login from "../screens/Account/HomeAuth/Login";
import Register from "../screens/Account/HomeAuth/Register";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeAuth"
        component={HomeAuth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpotlightItems"
        component={SpotlightItems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lyrics"
        component={Lyrics}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpotlightSong"
        component={SpotlightSong}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
