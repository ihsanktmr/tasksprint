import React from "react";

import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { TSDrawer } from "app/components/TSDrawer";
import { SCREEN } from "app/constants";
import { HomeScreen } from "app/screens/Home";
import { NotificationsScreen } from "app/screens/Notifications";
import { OnboardingScreen } from "app/screens/Onboarding";
import { selectIsOnboardingSeen } from "app/state/misc/selectors";
import { useSelector } from "react-redux";

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RoofStackParamList,
  "Onboarding"
>;

export type HomeScreenNavigationProp = DrawerNavigationProp<
  RoofStackParamList,
  "Home"
>;

type RoofStackParamList = {
  Onboarding: undefined;
  Drawer: DrawerParamList | undefined;
  Home: undefined;
  Notifications: undefined;
};

type DrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const Stack = createNativeStackNavigator<RoofStackParamList>();

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <TSDrawer {...props} />}
      initialRouteName={SCREEN.HOME}
    >
      <Drawer.Screen
        options={{ headerShown: false }}
        name={SCREEN.HOME}
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name={SCREEN.NOTIFICATIONS}
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}

const RootStack = () => {
  const hasSeenOnboarding = useSelector(selectIsOnboardingSeen);

  return (
    <Stack.Navigator
      initialRouteName={hasSeenOnboarding ? SCREEN.DRAWER : SCREEN.ONBOARDING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREEN.ONBOARDING}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREEN.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SCREEN.DRAWER} component={MainDrawer} />
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
