import { Stack, useRouter } from "expo-router";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form"
import signUpFormTypes from "@/types/signup";

export default function Signup() {

   const router = useRouter();

   const { handleSubmit, control, formState: { errors } } = useForm<signUpFormTypes>({
      defaultValues: {
         username: "",
         email: "",
         password: "",
         confirmPassword: ""
      }
   })

   const handleBack = () => {
      router.push("/pages/onboarding/onboarding")
   }

   const onSubmit = (data: signUpFormTypes) => {
      router.push("/pages/login/login")
   }

   return (
      <SafeAreaView>
         <Stack.Screen name="signup" options={{ headerShown: false }} />
         <TouchableOpacity onPress={handleBack}>
            <View className="mt-3 mb-16 ml-6">
               <Image source={require("../../../assets/images/Back.png")} />
            </View>
         </TouchableOpacity>
         <Text className="text-2xl font-bold text-center mt-4 mb-7">Log in to Chatbox</Text>
         <Text className="text-primary text-xl font-normal text-center">Welcome back! Sign in using your social {"\n"} account or email to continue us</Text>

         <View className="px-6">
            <Text className="text-secondary text-sm font-medium">Your Name</Text>
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mb-7 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value}
                     onBlur={onBlur}
                  />
               )}
               name="username"
               rules={{
                  required: true,
               }}
            />
            {
               errors.username && <Text className="text-danger text-sm">Please Enter your name</Text>
            }
            <Text className="text-secondary text-sm font-medium">Your Email</Text>
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     className="w-full border-b-[1px] border-primary outline-none mb-7 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value}
                     onBlur={onBlur}
                  />
               )}
               name="email"
               rules={{
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
                     className="w-full border-b-[1px] border-primary outline-none mb-7 mt-2.5 text-base font-medium"
                     onChange={onChange}
                     value={value}
                     onBlur={onBlur}
                  />
               )}
               name="password"
               rules={{
                  required: true,
                  minLength: 6,
               }}
            />
            {
               errors.password && <Text className="text-danger text-sm">Please Enter your password</Text>
            }
            <Text className="text-secondary text-sm font-medium mt-2.5">Confirm Password</Text>
            <TextInput className="w-full border-b-[1px] border-primary outline-none mt-2.5" />
            <TouchableOpacity className="bg-secondary rounded-md mt-32 mb-6 py-4 px-20" onPress={handleSubmit(onSubmit)}>
               <Text className="text-white text-center font-medium">Create an account</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}