import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, SafeAreaView, View } from "react-native";

export default function Splash() {

    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(false);

    const router = useRouter();

    useEffect(() => {
      const imageOpening =   setTimeout(() => {
            setDisplay(true);
        }, 1500);
       
     const imageShow  = setTimeout(() => {
            setDisplay(false);
            router.push("/login/login")
        }, 5000);

        return () => {
            clearTimeout(imageOpening);
            clearTimeout(imageShow);
        };
    }, [])

    if (!display) return null;

    return (
        <SafeAreaView>
            <View className="img flex justify-center items-center h-screen">
                {
                    loading && <ActivityIndicator size="large" color="#fff" />
                }
                <Image source={require("../../assets/images/splash.png")} className=""
                    onLoad={() => {
                        setLoading(false);
                    }}
                />
            </View>
        </SafeAreaView>
    )
}