import { Image, SafeAreaView } from "react-native";

export default function Splash() {
    return (
        <SafeAreaView>
            <Image source={require("../../assets/images/splash.png")}
              
             />
        </SafeAreaView>
    )
}