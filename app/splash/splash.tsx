import { Image, SafeAreaView, View } from "react-native";

export default function Splash() {
    return (
        <SafeAreaView>
            <View className="img flex justify-between items-center">
            <Image source={require("../../assets/images/splash.png")} className=""/>
            </View>
        </SafeAreaView>
    )
}