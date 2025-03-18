import { Stack, useRouter } from "expo-router";
import React from "react";
import { Button, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoarding() {

    const router = useRouter();
    const socialIcon = [
        {
            id: 1,
            source: require('../../../assets/images/Facebook_logo.png')
        },
        {
            id: 2,
            source: require('../../../assets/images/google.png')
        },
        {
            id: 3,
            source: require('../../../assets/images/apple.png')
        },


    ]

    const handleButton = () => {
         console.log("clicked")
    }

    const handleRouter = () => {
        console.log("clicked")
        router.push("/pages/login/login")
    }
    return (
        <SafeAreaView className="bg-[#1A1A1A] h-screen">
            <Stack.Screen options={{ headerShown: false }} />
            <View className=" pt-4 pb-10 flex items-center">
                <Image source={require("../../../assets/images/onboarding_title.png")} />
            </View>
            <Text className="text-7xl text-white font-semibold text-center">Connect friends</Text>
            <Text className="text-7xl text-white font-bold text-center">easily & quickly</Text>
            <View className="mt-4 mb-10 px-5">
                <Text className="text-primary text-center text-base font-normal">Our chat app is the perfect way to stay connected with friends and family.</Text>
            </View>
            <View className="flex justify-center items-center socialicons-row">
                <FlatList
                    data={socialIcon}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Image source={item.source} className="cursor-pointer" />}
                    className="social-icons *:flex-row"
                />
            </View>
            <Text className="text-primary text-center text-base font-normal">Or</Text>

            <View className="my-7 mx-6">
                <Button onPress={handleButton} title="Sign up withn mail " />
            </View>
            <View className="flex items-center justify-center flex-row">
            <Text className="text-primary text-base font-medium">Existing Account ?</Text> <Text className="text-white font-bold text-base" onPress={handleRouter}> Log in</Text>
            </View>
        </SafeAreaView>
    )
}