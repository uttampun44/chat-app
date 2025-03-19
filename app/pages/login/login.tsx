import { socialIcon } from "@/utils/onboarding";
import { Stack, useRouter } from "expo-router";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {

    //  to pop the index 2 from the array
    let index = 2
    const icons = socialIcon.filter(function (item) {
        return item !== socialIcon[index]
    })

    const router = useRouter();

    const handleBack = () => {
        router.push("/pages/onboarding/onboarding")
    }

    const handleSubmit = () => {

    }

    const handleForgetPassword = () => {

    }

    return (
        <SafeAreaView>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <TouchableOpacity onPress={handleBack}>
                <View className="mt-3 mb-16 ml-6">
                    <Image source={require("../../../assets/images/Back.png")} />
                </View>
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-center mt-4 mb-7">Log in to Chatbox</Text>
            <Text className="text-primary text-xl font-normal text-center">Welcome back! Sign in using your social {"\n"} account or email to continue us</Text>
            <View className="flex justify-center items-center socialicons-row">
                <FlatList
                    data={icons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Image source={item.source}  />}
                    className="social-icons *:flex-row"
                    numColumns={3}
                />
            </View>
            <Text className="text-primary text-center text-base font-normal my-7">Or</Text>

            <View className="px-6">
                <Text className="text-secondary text-sm font-medium">Your Email</Text>
                <TextInput className="w-full border-b-[1px] border-primary outline-none mb-7 mt-2.5" />
                <Text className="text-secondary text-sm font-medium">Password</Text>
                <TextInput className="w-full border-b-[1px] border-primary outline-none mt-2.5" />
            </View>
            <TouchableOpacity
                onPress={handleSubmit}
                className="bg-white py-3 rounded-lg mx-6 mt-40"
            >
                <Text className="text-primary text-center font-medium">Login</Text>
            </TouchableOpacity>

            <Text className="text-secondary font-medium text-base my-10 text-center" onPress={handleForgetPassword}>Forget password</Text>

        </SafeAreaView>
    )
}