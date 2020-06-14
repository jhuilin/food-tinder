import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to Swipe"
        onPress={() => props.navigation.navigate("Swipe")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
