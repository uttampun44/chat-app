import Splash from "./screens/splash/splash";
import './global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


export default function Index() {
  return (
     <SafeAreaView className="flex-1">
        <Stack.Screen  options={{ headerShown: false, animation: 'fade' }} />
        <Splash />
      </SafeAreaView>
  );
}
