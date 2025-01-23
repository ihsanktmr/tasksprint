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
import { FocusLogsScreen } from "app/screens/FocusLogs";
import { OnboardingScreen } from "app/screens/Onboarding";
import { TasksScreen } from "app/screens/Tasks";
import { TimerScreen } from "app/screens/Timer";
import { selectIsOnboardingSeen } from "app/state/misc/selectors";
import { useSelector } from "react-redux";

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RoofStackParamList,
  "Onboarding"
>;

export type HomeScreenNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  "Timer"
>;

type RoofStackParamList = {
  Onboarding: undefined;
  Drawer: DrawerParamList | undefined;
};

type DrawerParamList = {
  Tasks: undefined;
  Timer: undefined;
  Focuslogs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const Stack = createNativeStackNavigator<RoofStackParamList>();

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <TSDrawer {...props} />}
      initialRouteName={SCREEN.TIMER}
    >
      <Drawer.Screen
        options={{ headerShown: false }}
        name={SCREEN.FOCUSLOGS}
        component={FocusLogsScreen}
      />
      <Drawer.Screen
        name={SCREEN.TASKS}
        component={TasksScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={SCREEN.TIMER}
        component={TimerScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const RootStack = () => {
  const hasSeenOnboarding = useSelector(selectIsOnboardingSeen);

  return (
    <Stack.Navigator
      initialRouteName={!hasSeenOnboarding ? SCREEN.DRAWER : SCREEN.ONBOARDING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREEN.ONBOARDING}
        component={OnboardingScreen}
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
