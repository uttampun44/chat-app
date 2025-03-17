import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login(){
    return(
       <SafeAreaView>
         <Stack.Screen name="login" options={{ headerShown: false }} />
          <Text>Login</Text>
       </SafeAreaView>
    )
}