import React, { FC } from "react";

import { Ionicons } from "@expo/vector-icons";
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
import { shareApp } from "app/utils/share";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

interface Props {
  props: any;
}

export const TSDrawer: FC<Props> = (props: any) => {
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

  return (
    <View style={styles.drawerContainer}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.drawerInfoContainer}>
        <Text style={styles.drawerTitle}>TaskSprint</Text>
        <Text style={styles.drawerSubtitle}>Speed up productivity! 🚀</Text>
      </View>
      <Divider />
      <View style={{ height: 10 }} />
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label="Timer"
          onPress={() => {
            props.navigation.navigate(SCREEN.HOME);
          }}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="timer-outline" size={24} color="black" />
            </View>
          )}
        />
        <DrawerItem
          label="Focus Log"
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <MaterialIcons
                name="center-focus-strong"
                size={24}
                color="black"
              />
            </View>
          )}
        />
        <View style={{ height: 15 }} />

        <DrawerItem
          label="Share"
          labelStyle={styles.drawerLabelText}
          onPress={handleShare}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="share" size={24} color={"black"} />
            </View>
          )}
        />
        <DrawerItem
          label="Rate"
          labelStyle={styles.drawerLabelText}
          onPress={handleRate}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="star" size={24} color={"black"} />
            </View>
          )}
        />
        <DrawerItem
          label="Instagram"
          labelStyle={styles.drawerLabelText}
          onPress={handleInstagram}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="logo-instagram" size={24} color={"black"} />
            </View>
          )}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ height: 10 }} />
        <Divider />

        <View style={{ flex: 1 }} />
        {__DEV__ && (
          <DrawerItem
            label="Reset (Dev only)"
            onPress={() => null}
            icon={() => (
              <View style={styles.drawerItemIconContainer}>
                <MaterialCommunityIcons
                  name="lock-reset"
                  size={24}
                  color="black"
                />
              </View>
            )}
          />
        )}
        <DrawerItem
          label="About"
          onPress={() => null}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="black"
              />
            </View>
          )}
        />
        <View style={{ height: 30 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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
  drawerLabelText: {
    fontFamily: typography.secondary.regular,
  },
  image: {
    borderRadius: radii.full,
    width: 40,
    height: 40,
    marginBottom: distances.xl,
  },
  drawerItemIconContainer: {},
});
