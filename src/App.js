import React, { Component } from "react";
import { StatusBar, View } from "react-native";

import { AppNavigator } from "./AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    );
  }
}

export default App;
