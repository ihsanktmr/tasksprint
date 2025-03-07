import React, { PropsWithChildren } from "react";

import { LanguageProvider } from "app/context/LanguageProvider";
import { SnackbarProvider } from "app/context/SnackbarProvider";
import { persistor, store } from "app/state";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider>
            <LanguageProvider>
              <SnackbarProvider>{children}</SnackbarProvider>
            </LanguageProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
