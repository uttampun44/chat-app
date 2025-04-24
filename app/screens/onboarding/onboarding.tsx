import { Stack, useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  socialIcon  from "@/utils/onboarding";
import * as Google from "expo-auth-session/providers/google";
import { CONFIG } from "../../config";

export default function OnBoarding() {

    const router = useRouter();

    const handleButton = () => {
        router.push("/screens/signup/signup")
    }

    const handleRouter = () => {
        router.push("/screens/login/login")
    }

    let index = 3
    const icons = socialIcon.filter(function (item) {
        return item !== socialIcon[index]
    })

      const [request, response, promptAsync] = Google.useAuthRequest({
            webClientId: CONFIG.GOOGLE_WEB_CLIENT_ID || "",
            androidClientId: CONFIG.GOOGLE_ANDROID_CLIENT_ID || "",
        })
    
       
        
  

    return (
        <SafeAreaView className="bg-[#1A1A1A] h-screen">
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <View className=" pt-4 pb-10 flex items-center">
                <Image source={require("../../../assets/images/onboarding_title.png")} />
            </View>
            <Text className="text-7xl text-white font-normal text-center">Connect friends</Text>
            <Text className="text-8xl text-white font-bold text-center">easily & quickly</Text>
            <View className="mt-4 mb-10 px-5">
                <Text className="text-primary text-center text-base font-normal">Our chat app is the perfect way to stay connected with friends and family.</Text>
            </View>
            <View className="flex justify-center items-center socialicons-row">
                <FlatList
                    data={icons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <TouchableOpacity >
                    <Image source={item.source} testID="social-icon" />
                    </TouchableOpacity>}
                    className="social-icons *:flex-row"
                    numColumns={3}
                />
            </View>
            <Text className="text-primary text-center text-base font-normal my-7">Or</Text>

            <TouchableOpacity
                onPress={handleButton}
                className="bg-white py-3 rounded-lg mx-6"
            >
                <Text className="text-black text-center font-bold">Sign up with mail</Text>
            </TouchableOpacity>
            <View className="flex items-center justify-center flex-row my-10">
                <Text className="text-primary text-base font-medium">Existing Account ?</Text> 
                <TouchableOpacity onPress={handleRouter}>
                    <Text className="text-white font-bold text-base ml-1">Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}