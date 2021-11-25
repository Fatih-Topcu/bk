import React from "react";
import { StyleSheet, Text, View } from "react-native";

/*
Content of Second Tab
*/
function SecondTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Second Tab</Text>
    </View>
  );
}

/*
Styles for screen
*/
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  titleText: {
    color: "green",
    fontWeight: "100",
    fontSize: 32,
  },
});

export default SecondTab;
