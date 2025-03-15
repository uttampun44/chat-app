import { Image, SafeAreaView } from "react-native";

export default function Splash() {
    return (
        <SafeAreaView>
            <div className="img flex justify-between items-center">
            <Image source={require("../../assets/images/splash.png")} className=""/>
            </div>
        </SafeAreaView>
    )
}