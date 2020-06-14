import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function NoImages(props) {
  return (
    <View style={styles.container}>
      <Text>NoImages screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => props.navigation.navigate("Home")}
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
