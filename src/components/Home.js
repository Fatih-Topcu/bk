import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  const [input, onChangeInput] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>

      <TextInput
        onChangeText={onChangeInput}
        value={input}
        style={styles.input}
        placeholder="Enter input"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // on press save input to param, then set input to empty string
          const param = input;
          onChangeInput("");
          //navigate to Process screen with param
          navigation.navigate("Process", { input: param });
        }}
      >
        <Text>Process Input</Text>
      </TouchableOpacity>
    </View>
  );
}

/*
Styles for screen
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleText: {
    color: "blue",
    fontWeight: "normal",
    fontSize: 32,
  },
  input: {
    height: 40,
    minWidth: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ee78fa",
    padding: 16,
  },
});

export default Home;
