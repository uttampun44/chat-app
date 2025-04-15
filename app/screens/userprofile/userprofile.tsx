import { router, Stack } from "expo-router";
import { useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Userprofile() {

    const { handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }
    
    return (
        <SafeAreaView className="flex-1 bg-homebg">
            <Stack.Screen name="userprofile" options={{ headerShown: false }} />
            <TouchableOpacity onPress={() => {
                router.push("/tabs/home")
            }} className=" w-10 h-10">
                <View className="mt-3 mb-16 ml-6">
                    <Image source={require("../../../assets/images/Back.png")} className="w-full h-full object-contain" />
                </View>
            </TouchableOpacity>
            <View >
                <Text className="text-center text-primary text-xl font-bold mt-10 mb-5">Edit profile</Text>
            </View>
            <View>
                <Image source={require("../../../assets/images/profile.png")} className="w-40 h-40 mx-auto mb-10" />
            </View>
            <View className="formField mx-5">
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Name</Text>
                    <TextInput
                        placeholder="Enter your name"
                        value="Uttam"
                        defaultValue="Uttam"
                        className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                    />
                </View>
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Email</Text>
                    <TextInput
                        placeholder="Enter your email"
                        value="email@gmail.com"
                        defaultValue="email@gmail.com"
                        className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                    />
                </View>
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Phone Number</Text>
                    <TextInput
                        placeholder="Enter your phone number"
                        value="9876543210"
                        defaultValue="9876543210"
                        className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                    />
                </View>
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Date of Birth</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Enter your date of birth"
                        value="123456789"
                        defaultValue="123456789"
                        className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                    />
                </View>
                <TouchableOpacity className="bg-primary rounded-md mt-8 mb-6 py-4 px-20" onPress={handleSubmit(onSubmit)}>
                    <Text className="text-white text-center font-medium">Update account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}