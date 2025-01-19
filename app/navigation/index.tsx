// In App.js in a new project
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "app/screens/HomeScreen";
import { NotificationsScreen } from "app/screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
