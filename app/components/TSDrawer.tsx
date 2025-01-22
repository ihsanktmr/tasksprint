import React, { FC } from "react";

import { Ionicons } from "@expo/vector-icons";
import { DrawerItem } from "@react-navigation/drawer";
import {
  distances,
  genericSpacing,
  radii,
  typography,
} from "app/constants/theme";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

interface Props {
  props: any;
}

export const TSDrawer: FC<Props> = (props: any) => {
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
          label="Admin"
          onPress={() => {
            props.navigation.navigate("AdminStack");
          }}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="home" size={24} color={"black"} />
            </View>
          )}
        />
        <DrawerItem
          label="Anasayfa"
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="home" size={24} color={"black"} />
            </View>
          )}
        />
        <DrawerItem
          label="Dil Değiştir"
          labelStyle={styles.drawerLabelText}
          onPress={() => {
            Alert.alert("Dil Değiştir", "Yapım Aşamasında!");
          }}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="home" size={24} color={"black"} />
            </View>
          )}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ height: 10 }} />
        <Divider />

        <View style={{ flex: 1 }} />
        <DrawerItem
          label="Kullanıcıyı Sil"
          onPress={() => null}
          icon={() => (
            <View style={styles.drawerItemIconContainer}>
              <Ionicons name="home" size={24} color={"black"} />
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
    width: 22,
    height: 22,
    marginBottom: distances.xl,
  },
  drawerItemIconContainer: {},
});
