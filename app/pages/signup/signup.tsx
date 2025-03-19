import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup(){
    return(
       <SafeAreaView>
         <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Text>Signup</Text>
       </SafeAreaView>
    )
}