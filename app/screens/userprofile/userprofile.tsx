import { router, Stack } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userprofile } from "./types/userprofile";
import * as DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import { useState } from "react";
import { toast } from "sonner";
import usePost from "@/hooks/api/usePost";
import { useAuth } from "@/hooks/auth/useAuth";


export default function Userprofile() {

    const [filename, setFilename] = useState<string | null>(null);
    const { handleSubmit, control, setValue } = useForm<userprofile>()

    const {user} = useAuth();

    const handleFile = async () => {
        // try {
        //     const fileSize = await RNFS.stat(filename as string);
        //     const maxSize = 2 * 1024 * 1024;
        //     if (fileSize.size > maxSize) {
        //         toast.error(`File size should be less than ${maxSize} MB `)
        //         return
        //     }
        //     const res = await DocumentPicker.pickSingle({
        //         type: [DocumentPicker.types.allFiles],
        //     });
        //     setFilename(res.name)
        //     setValue("image", res.fileCopyUri as string)
        // } catch (error) {
        //     if (DocumentPicker.isCancel(error)) {
        //         toast.info("User cancelled")
        //     } else {
        //         toast.error("Something went wrong")
        //     }
        // }
    }


    const handleBack = () => {
        router.push("/tabs/home")
    }

    const postUserProfile = usePost("/api/v1/userprofile");
    const onSubmit = async (data: userprofile) => {
        try {
            await postUserProfile.mutateAsync({ data: data })
            toast.success("Profile updated successfully")
        } catch (error) {
            toast.error("Something went wrong")
        }
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
             <Controller
                control={control}
                  name="user_id"
                 render={({field: {value}}) => (
                    <TextInput
                     className="hidden"
                      value={user}
                     />
                 )}
               />
            <View className="formField mx-5">
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Name</Text>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="Enter your name"
                                onChangeText={onChange}
                                value={value || ""}
                                className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                            />
                        )}
                        rules={{ required: true }}
                    />
                </View>

                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Phone Number</Text>
                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="Enter your phone number"
                                onChangeText={onChange}
                                value={value || ""}
                                className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                            />
                        )}
                        rules={{ required: true }}
                    />
                </View>
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Date of Birth</Text>
                    <Controller
                        control={control}
                        name="date"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="Enter your date of birth"
                                onChangeText={onChange}
                                value={value || ""}
                                className="w-full border-b-[1px] border-primary text-primary outline-none mb-4 mt-2.5 text-base font-medium"
                            />
                        )}
                        rules={{ required: true }}
                    />
                </View>
                <View className="mb-1">
                    <Text className="text-primary text-sm font-normal">Profile Picture</Text>
                    <TouchableOpacity
                        onPress={handleFile}
                        className="w-full border border-primary rounded-md p-3 mb-4 mt-2.5 bg-white"
                    >
                        <Text className="text-primary">
                            {filename || "Tap to upload image"}
                        </Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity className="bg-primary rounded-md mt-8 mb-6 py-4 px-20" onPress={handleSubmit(onSubmit)}>
                    <Text className="text-white text-center font-medium">Update account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}