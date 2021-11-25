import React from "react";
import { StyleSheet, Text, View } from "react-native";

/*
Content of First Tab
*/
function FirstTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>First Tab</Text>
    </View>
  );
}

/*
Styles for screen
*/
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  titleText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default FirstTab;
