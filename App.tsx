import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";

import { NativeBaseProvider, StatusBar } from "native-base";

import { THEME } from "./src/styles/theme";

export default function App() {
  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fonstLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
