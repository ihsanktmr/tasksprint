import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { distances, radii } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { i18n } from "app/locale";
import { StyleSheet, View } from "react-native";
import { Button, Modal } from "react-native-paper";

interface InternetModalProps {
  visible: boolean;
  onRetry: () => void;
  onDismiss: () => void;
}

export const InternetModal: React.FC<InternetModalProps> = ({
  visible,
  onRetry,
  onDismiss,
}) => {
  const backgroundColor = useThemeColor("background");

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      style={styles.modalStyle}
      contentContainerStyle={[styles.modalContainer, { backgroundColor }]}
    >
      <ThemedText style={styles.modalText}>{i18n.t("noInternet")}</ThemedText>
      <View style={styles.modalActions}>
        <Button mode="contained" onPress={onRetry}>
          {i18n.t("retry")}
        </Button>
        <View style={styles.modalSpacer} />
        <Button mode="contained" onPress={onDismiss}>
          {i18n.t("okay")}
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "80%",
    marginHorizontal: distances.md,
    padding: distances.md,
    borderRadius: radii.lg,
  },
  modalStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 14,
    marginBottom: distances.md,
    textAlign: "center",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalSpacer: {
    width: 10,
  },
});
