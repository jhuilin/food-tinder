import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SwipeScreen from "../screens/swipeScreen/SwipeScreen";
import NoImages from "../screens/swipeScreen/NoImages";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" mode="modal">
        <Stack.Screen name="NoImages" component={NoImages} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Swipe" component={SwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
