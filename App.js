import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import { persister, store } from "./src/store/store";
import { Provider, useSelector } from "react-redux";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { useColorScheme } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./navigation";

export default function App() {
  const colorScheme = useColorScheme();

  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PersistGate>
      </Provider>
    );
  }
}
