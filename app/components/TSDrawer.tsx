import React, { FC } from "react";

import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerItem } from "@react-navigation/drawer";
import { SCREEN } from "app/constants";
import {
  distances,
  genericSpacing,
  radii,
  typography,
} from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { i18n } from "app/locale";
import { toggleTheme } from "app/state/theme/actions";
import { selectTheme } from "app/state/theme/selectors";
import { shareApp } from "app/utils/share";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface Props {
  props: any;
}

export const TSDrawer: FC<Props> = (props: any) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");

  const handleRate = () => {
    console.log("");
  };

  const handleShare = () => {
    shareApp();
  };

  const handleInstagram = async () => {
    try {
      await Linking.openURL("instagram://user?username=xxxxx");
    } catch (e) {
      await Linking.openURL("https://www.instagram.com/xxxxx/");
    }
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemedView style={styles.drawerContainer}>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: distances.lg,
        }}
      >
        <MaterialIcons name="rocket" size={35} color={textColor} />
        <TouchableOpacity onPress={handleToggleTheme}>
          {theme === "dark" ? (
            <Ionicons name="sunny" size={24} color="yellow" />
          ) : (
            <Ionicons name="moon" size={24} color={textColor} />
          )}
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.drawerInfoContainer}>
        <ThemedText style={styles.drawerTitle}>TaskSprint</ThemedText>
        <ThemedText style={styles.drawerSubtitle}>
          {i18n.t("drawerSubtitle")}
        </ThemedText>
      </ThemedView>
      <Divider />
      <ThemedView style={{ height: 10 }} />
      <ThemedView style={styles.drawerItemContainer}>
        <DrawerItem
          label="Timer"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={() => {
            props.navigation.navigate(SCREEN.TIMER);
          }}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <Ionicons name="timer-outline" size={24} color={textColor} />
            </ThemedView>
          )}
        />
        <DrawerItem
          label="Tasks"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={() => {
            props.navigation.navigate(SCREEN.TASKS);
          }}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <FontAwesome name="tasks" size={24} color={textColor} />
            </ThemedView>
          )}
        />
        <DrawerItem
          label="Focus Logs"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={() => {
            props.navigation.navigate(SCREEN.FOCUSLOGS);
          }}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <MaterialIcons
                name="center-focus-strong"
                size={24}
                color={textColor}
              />
            </ThemedView>
          )}
        />
        <ThemedView style={{ height: 15 }} />

        <DrawerItem
          label="Share"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={handleShare}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <Ionicons name="share" size={24} color={textColor} />
            </ThemedView>
          )}
        />
        <DrawerItem
          label="Rate"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={handleRate}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <Ionicons name="star" size={24} color={textColor} />
            </ThemedView>
          )}
        />
        <DrawerItem
          label="Instagram"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={handleInstagram}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <Ionicons name="logo-instagram" size={24} color={textColor} />
            </ThemedView>
          )}
        />
      </ThemedView>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={{ height: 10 }} />
        <Divider />

        <ThemedView style={{ flex: 1 }} />
        {__DEV__ && (
          <DrawerItem
            label="Reset (Dev only)"
            labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
            onPress={() => null}
            icon={() => (
              <ThemedView style={styles.drawerItemIconContainer}>
                <MaterialCommunityIcons
                  name="lock-reset"
                  size={24}
                  color={textColor}
                />
              </ThemedView>
            )}
          />
        )}
        <DrawerItem
          label="About"
          labelStyle={{ ...styles.drawerLabelThemedText, color: textColor }}
          onPress={() => null}
          icon={() => (
            <ThemedView style={styles.drawerItemIconContainer}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={textColor}
              />
            </ThemedView>
          )}
        />
        <ThemedView style={{ height: 30 }} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
    paddingTop: "17%",
    paddingLeft: genericSpacing,
  },
  drawerItemContainer: {},

  drawerInfoContainer: {
    marginTop: distances.xl,
    marginBottom: distances.xl,
  },
  drawerTitle: {
    fontSize: 24,
    fontFamily: typography.primary.bold,
    marginBottom: distances.xl,
  },
  drawerSubtitle: {
    fontFamily: typography.secondary.regular,
  },
  drawerLabelThemedText: {
    fontFamily: typography.secondary.regular,
  },
  image: {
    borderRadius: radii.full,
    width: 40,
    height: 40,
  },
  drawerItemIconContainer: {},
});
