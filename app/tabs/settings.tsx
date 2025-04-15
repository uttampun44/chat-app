import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
    return (
        <SafeAreaView className="bg-homebg flex-1"> 
        <View className="mt-10 mb-5 mx-6 flex flex-row items-center justify-center">
             <Text className="text-white text-xl font-medium text-center">Settings</Text>
        </View>
        <View className="flex-1 items-center justify-center bg-white rounded-t-2xl border-[1px] border-primary">
             
        </View>
        </SafeAreaView>
    )
}