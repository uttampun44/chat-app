import { Stack, useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form"
import signUpFormTypes from "@/types/signup";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import { useState } from "react";

export default function Signup() {

   const router = useRouter();
   const post = usePost("/api/v1/sign-up")

   const { handleSubmit, control, formState: { errors } } = useForm<signUpFormTypes>()

   const handleBack = () => {
      router.push("/screens/onboarding/onboarding")
   }

   const onSubmit = async (data: signUpFormTypes) => {
      try {
         if (data.password !== data.password_confirmation) {
            toast.info("Passwords do not match")
            return
         }
         if (data.password.length >= 8) {
            toast.info("Password must be at least 8 characters")
            return
         }
         await post.mutateAsync({ data: data });
         toast.success("Signup successfully")
         router.push("/screens/login/login")
      } catch (error: any) {
         if (error.response.status === 422) {
            toast.error(error.response.data.message)
            return
         }
         toast.error("Something went wrong")
      }
   }

   return (
      <SafeAreaView>
         <Stack.Screen name="signup" options={{ headerShown: false }} />
         <TouchableOpacity onPress={handleBack}>
            <View className="mt-3 mb-4 ml-6">
               <Image source={require("../../../assets/images/Back.png")} />
            </View>
         </TouchableOpacity>
         <Text className="text-2xl font-bold text-center mt-4 mb-7">Log in to Chatbox</Text>
         <Text className="text-primary text-xl font-normal text-center">Welcome back! Sign in using your social {"\n"} account or email to continue us</Text>

         <View className="px-6 mt-2">
            <Text className="text-secondary text-sm font-medium">Your Name</Text>
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mb-4 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value || ""}
                     onBlur={onBlur}
                  />
               )}
               name="name"
               rules={{
                  required: true,
               }}
            />
            {
               errors.name && <Text className="text-danger text-sm">Please Enter your name</Text>
            }
            <Text className="text-secondary text-sm font-medium">Your Email</Text>
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mb-4 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value || ""}
                     onBlur={onBlur}
                     focusable
                     keyboardType="email-address"
                  />
               )}
               name="email"
               rules={{
                  required: true,
               }}
            />
            {
               errors.email && <Text className="text-danger text-sm">Please Enter your email</Text>
            }
            <Text className="text-secondary text-sm font-medium">Password</Text>
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mb-4 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value || ""}
                     onBlur={onBlur}
                     secureTextEntry={true}
                     textContentType="password"
                     autoComplete="password"
                     focusable
                  />
               )}
               name="password"
               rules={{
                  required: true,
                  minLength: 9
               }}
            />
            {
               errors.password_confirmation && <Text className="text-danger text-sm">Please Enter your password</Text>
            }
            <Text className="text-secondary text-sm font-medium mt-2.5">Confirm Password</Text>
            <Controller  
               control={control}
               render={({ field: { value, onChange } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mt-2.5 text-base font-medium"
                     value={value || ""}
                     onChange={onChange}
                     secureTextEntry={true}
                     textContentType="password"
                     autoComplete="password"
                  />
               )}
               name="password_confirmation"
               rules={{
                  required: true,
                  minLength: 8
               }}
            />
            {
               errors.password && <Text className="text-danger text-sm">Please Enter your confirm password</Text>
            }
            <TouchableOpacity className="bg-secondary rounded-md mt-8 mb-6 py-4 px-20" onPress={handleSubmit(onSubmit)}>
               <Text className="text-white text-center font-medium">Create an account</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}