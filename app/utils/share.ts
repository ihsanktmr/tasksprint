import { APP_WEBSITE_URL } from "app/constants/url";
import { i18n } from "app/locale";
import { Share } from "react-native";

const SHARE_NOT_SUPPORTED_MESSAGE = i18n.t("shareNotSupported");
const ERROR_TITLE = i18n.t("errorTitle");

export const shareApp = async (): Promise<void> => {
  try {
    const result = await Share.share({
      message: i18n.t("shareAppMessage") + "\n" + "\n" + APP_WEBSITE_URL,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log(result.activityType);
      } else {
        console.log(result);
      }
    } else if (result.action === Share.dismissedAction) {
      console.log("dismissed");
    }
  } catch (error) {
    console.error(`${ERROR_TITLE}: ${SHARE_NOT_SUPPORTED_MESSAGE}`, error);
  }
};
