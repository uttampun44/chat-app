import Splash from "./screens/splash/splash";
import './global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


export default function Index() {
  return (
     <SafeAreaView className="flex-1">
<<<<<<< Updated upstream
        <Stack.Screen  options={{ headerShown: false, animation: 'fade' }} />
        <Splash />
=======
        <Stack.Screen name="splash" options={{ headerShown: false, animation: 'fade' }} component={Splash} />
         <Splash /> 
>>>>>>> Stashed changes
      </SafeAreaView>
  );
}
