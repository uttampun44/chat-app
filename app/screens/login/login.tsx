// @ts-nocheck
import socialIcon from "@/utils/onboarding";
import { Stack, useRouter } from "expo-router";
import { Controller } from "react-hook-form";
import { FlatList, Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { loginForm } from "@/types/login";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import useFetch from "@/hooks/api/useFetch";
import { CONFIG } from "../../config";
import { useAuth } from "@/hooks/auth/useAuth";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";


export default function Login() {

    //  to pop the index 2 from the array
    let index = 2
    const icons = socialIcon.filter(function (item) {
        return item !== socialIcon[index]
    })

    const { token, setToken } = useAuth()

    const post = usePost("/api/v1/login")
 
    console.log(CONFIG.GOOGLE_WEB_CLIENT_ID)

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: CONFIG.GOOGLE_WEB_CLIENT_ID || "",
        clientId: CONFIG.GOOGLE_CLIENT_ID,
        clientSecret: CONFIG.GOOGLE_CLIENT_SECRET,
        androidClientId: CONFIG.GOOGLE_ANDROID_CLIENT_ID,
    })

    const { control, formState: { errors }, handleSubmit } = useForm<loginForm>();

    const router = useRouter();

    const handleBack = () => {
        router.push("/screens/onboarding/onboarding")
    }

    const onSubmit = async(data: loginForm): Promise<void> => {
        try {
            
            const response  = await post.mutateAsync(data);
            
            console.log(response)
            const tokenData = await AsyncStorage.setItem("token", JSON.stringify(token))
            setToken(response.token)
            toast.success("Login Success")
            router.push("/tabs/home")
        } catch (error) {
          toast.error("Login Failed")
        }
    }

    const handleForgetPassword = () => {
        router.push("/screens/forgetpassword/forgetpassword")
    }

    const handleSubmitGoogle = async (): Promise<void> => {
        const result = await AsyncStorage.getItem("token");
        if (!result) return;
        const token = JSON.parse(result);
        setToken(token)
        if (token.accessToken) {
            router.push("/tabs/home")

        }
    };

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
                    renderItem={({ item }) => <View>
                        <TouchableOpacity onPress={() => handleSubmit(item)}>
                            <Image source={item.source} />
                        </TouchableOpacity>
                    </View>}
                    className="social-icons *:flex-row"
                    numColumns={3}
                />
            </View>
            <Text className="text-primary text-center text-base font-normal my-7">Or</Text>

            <View className="px-6">
                <Text className="text-secondary text-sm font-medium">Your Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            className="w-full border-b-[1px] border-primary outline-none mt-2.5 text-base font-medium"
                            defaultValue=""
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.email && <Text className="text-danger text-sm mt-1">Please enter a email</Text>}
                <Text className="text-secondary text-sm font-medium mt-4">Password</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            className="w-full border-b-[1px] border-primary text-homebg outline-none mt-2.5 text-base font-medium"
                            secureTextEntry={true}
                            defaultValue=""
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.password && <Text className="text-danger text-sm mt-1">Please enter a password</Text>}
            </View>
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                className="bg-white py-3 rounded-lg mx-6 mt-16"
            >
                <Text className="text-primary text-center font-medium">Login</Text>
            </TouchableOpacity>

            <Text className="text-secondary font-medium text-base my-10 text-center" onPress={handleForgetPassword}>Forget password</Text>

        </SafeAreaView>
    )
}