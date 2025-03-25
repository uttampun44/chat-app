import { Stack } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface forgetPasswordFields {
    email: string
}

export default function forgetPassword() {

    const { control, formState: { errors }, handleSubmit } = useForm<forgetPasswordFields>()

    const handleOtp = (data: forgetPasswordFields) => {
        console.log("handle otp")
    }
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Stack.Screen name="login" options={{ headerShown: false }} />
             
            <View className="px-6 w-full ">

                <View className="flex justify-center items-center mb-2.5"><Image source={require("../../../assets/images/splash.png")} className="w-full h-full object-contain" /></View>
                <Text className="text-secondary text-sm font-medium">Your Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter your email"
                            className="w-full border-b-[1px] border-primary outline-none mt-2.5"

                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.email && <Text className="text-danger text-sm mt-1">Please enter a email</Text>}
                <TouchableOpacity className="bg-homebg  rounded-lg px-4 py-2 mt-5" onPress={handleSubmit(handleOtp)}>
                    <Text className="text-sm font-bold text-primary text-center">Send OTP</Text>
                </TouchableOpacity>

                <View className="flex flex-row justify-center my-5 gap-4 items-end">
                    <Text className="text-primary text-base font-bold">Haven't receive OTP?  ?</Text><TouchableOpacity><Text className="text-base font-medium">Resend</Text></TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}