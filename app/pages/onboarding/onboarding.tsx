import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoarding() {
    return (
        <SafeAreaView className="bg-[#1A1A1A]">
            <Stack.Screen options={{ headerShown: false }} />
            <View className=" pt-4 pb-10 flex items-center">
                <Image source={require("../../../assets/images/onboarding_title.png")} />
            </View>
                <Text className="text-5xl text-white font-semibold text-center">Connect friends</Text>
                <Text className="text-5xl text-white font-bold text-center">easily & quickly</Text>
               <View className="mt-4 mb-10">
                 <Text className="text-primary text-center text-base font-normal">Our chat app is the perfect way to stay connected with friends and family.</Text>
               </View>
        </SafeAreaView>
    )
}