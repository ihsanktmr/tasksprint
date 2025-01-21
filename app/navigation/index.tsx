import React from "react";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "app/constants";
import { HomeScreen } from "app/screens/Home";
import { NotificationsScreen } from "app/screens/Notifications";

type BottomTabParamList = {
  Home: undefined;
  Notifications: undefined;
};

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  "Home"
>;

export type RootStackParamList = {
  Home: { userId: string };
  Notifications: { isRead: boolean };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREEN.HOME}
        component={HomeScreen}
        initialParams={{ userId: "defaultUserId" }}
      />
      <Stack.Screen
        name={SCREEN.NOTIFICATIONS}
        component={NotificationsScreen}
        initialParams={{ isRead: false }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
