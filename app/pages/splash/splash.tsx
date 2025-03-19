import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Splash() {
    const [displayImg, setDisplayImg] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const display = setTimeout(() => {
            setDisplayImg(true);
        }, 1000);

        const load = setTimeout(() => {
            router.push("/pages/onboarding/onboarding");

        }, 2000);
        return () => {
            clearTimeout(display)
            clearTimeout(load)
        };
    }, [])
    return (
        <SafeAreaView>
          <Stack.Screen name="splash" options={{ headerShown: false }} />
               <View className="h-screen flex items-center justify-center">

                {
                    displayImg && <Image source={require("../../../assets/images/splash.png")}
                    />
                }
            </View>
        </SafeAreaView>
    )
}