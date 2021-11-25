import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen from "./src/components/Home";
import FirstTab from "./src/components/FirstTab";
import SecondTab from "./src/components/SecondTab";
import Process from "./src/components/Process";

const Tab = createBottomTabNavigator();

//Helper function for setting tab icons
function materialIcon(name, color) {
  return <MaterialCommunityIcons name={name} color={color} size={36} />;
}

// Stack navigator for homepage and process screens
function Homepage() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="Process" component={Process} />
    </Stack.Navigator>
  );
}

/*
App function which has Tab Navigator to navigate between screens.

App|
    -TabNavigator|
                  -StackNavigator|
                                 -HomeScreen
                                 -Process
                  -First Tab
                  -Second Tab
*/
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            tabBarIcon: () => materialIcon("home", "blue"),
          }}
        />

        <Tab.Screen
          name="First Tab"
          component={FirstTab}
          options={{
            tabBarIcon: () => materialIcon("numeric-1", "red"),
          }}
        />
        <Tab.Screen
          name="Second Tab"
          component={SecondTab}
          options={{
            tabBarIcon: () => materialIcon("numeric-2", "green"),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
