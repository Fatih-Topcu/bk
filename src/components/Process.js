import React from "react";
import { StyleSheet, Text, View } from "react-native";

/*
Simple screen to print input which arrived from HomeScreen.
*/
function Process({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{route.params.input}</Text>
    </View>
  );
}

/*
Styles for screen
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default Process;
