import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SwipeScreen from "../screens/swipeScreen/SwipeScreen";
import NoImages from "../screens/swipeScreen/NoImages";
import MainMap from "../screens/Map/MainMap";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainMap"
        headerMode="none"
        mode="modal"
      >
        <Stack.Screen name="NoImages" component={NoImages} />
        <Stack.Screen name="MainMap" component={MainMap} />
        <Stack.Screen name="Swipe" component={SwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
