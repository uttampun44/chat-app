import { Stack } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"

export default function Login(){
    return(
        <SafeAreaView>
           {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
           <View>
            <Text>Login</Text>
            </View>
        </SafeAreaView>
    )
}