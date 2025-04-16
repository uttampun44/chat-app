// @ts-nocheck

import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Modal, StyleSheet, LayoutChangeEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack, useRouter } from "expo-router";
import { useState, useRef, useEffect } from "react";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useAuth } from "@/hooks/auth/useAuth";
import useFetch from "@/hooks/api/useFetch";


const Tab = createBottomTabNavigator();

interface MessageItem {
    id: number;
    name: string;
    image: any;
    message: string;
}

interface PositionData {
    x: number;
    y: number;
    width: number;
    height: number;
}

const messages: MessageItem[] = [
    {
        id: 1,
        name: "Adil",
        image: require("../../assets/images/friendOne.png"),
        message: "Hi ! there"
    },
    {
        id: 2,
        name: "Marina",
        image: require("../../assets/images/friendTwo.png"),
        message: "Hi ! there"
    },
    {
        id: 3,
        name: "Dean",
        image: require("../../assets/images/friendThree.png"),
        message: "Hi ! there"
    },
    {
        id: 4,
        name: "John Doe",
        image: require("../../assets/images/friendFour.png"),
        message: "Hi ! there"
    },
    {
        id: 5,
        name: "John Doe",
        image: require("../../assets/images/friendFour.png"),
        message: "Hi ! there"
    },
    {
        id: 6,
        name: "Uttam",
        image: require("../../assets/images/friendFour.png"),
        message: "Hi ! there"
    }
];

export default function Home() {
    const [visible, setVisible] = useState<boolean>(false);
    const [profilePosition, setProfilePosition] = useState<PositionData>({ x: 0, y: 0, width: 0, height: 0 });
    const profileRef = useRef<TouchableOpacity | null>(null);
    const router = useRouter();
    const { token } = useAuth()
    
    const postLogout = usePost("/api/v1/logout");
    const {data: users} = useFetch("api/v1/users-list", {
        'Authorization': `Bearer ${token}`
    })
   
    console.log(users)
  
    const friends: MessageItem[] = [
        {
            id: 1,
            name: "Adil",
            image: require("../../assets/images/friendOne.png"),
            message: "Hi ! there"
        },
        {
            id: 2,
            name: "Marina",
            image: require("../../assets/images/friendTwo.png"),
            message: "Hi ! there"
        },
        {
            id: 3,
            name: "Dean",
            image: require("../../assets/images/friendThree.png"),
            message: "Hi ! there"
        },
        {
            id: 4,
            name: "John Doe",
            image: require("../../assets/images/friendFour.png"),
            message: "Hi ! there"
        },
    ];

    const handleUserClick = (item: MessageItem): void => {

        console.log(item)

    };

    
    const openProfileModal = (): void => {

        profileRef.current?.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
            setProfilePosition({ x: pageX, y: pageY, width, height });
            setVisible(true);
        });
    };

    const handleLogout = async (): Promise<void> => {
        try {

            const token = await AsyncStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }

            await postLogout.mutateAsync({
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (error: any) {
            console.log("Logout error:", error?.response?.data || error?.message || error);

        } finally {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');
            setVisible(false);
            router.push("/screens/login/login");
            toast.success("Logged out successfully");
        }
    }

    return (
        <SafeAreaView className="bg-homebg flex-1">
            <Stack.Screen name="header" options={{ headerShown: false }} />
            <View className="mt-10 mb-5 mx-6 flex flex-row items-center">
                <View className="flex flex-row items-center flex-1 gap-x-1 relative">
                    <TextInput
                        className="text-black text-base font-normal outline-none border-[1px] bg-[#F3F6F6] p-1 border-[#F3F6F6] rounded-md w-full"
                        placeholder="Search Friends..."
                    />
                </View>
                <TouchableOpacity
                    ref={profileRef}
                    onPress={openProfileModal}
                    className="relative">
                    <Image source={require("../../assets/images/profile.png")} className="ml-4 w-9 h-9" />
                </TouchableOpacity>
            </View>

            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setVisible(false)}>
                <TouchableOpacity
                    style={StyleSheet.absoluteFill}
                    onPress={() => setVisible(false)}
                    activeOpacity={1}>
                    <View
                        style={{
                            position: 'absolute',
                            top: profilePosition.y + profilePosition.height,
                            right: 20,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            padding: 12,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                router.push("/screens/userprofile/userprofile")
                                setVisible(false);
                            }}
                            className="py-2">
                            <Text className="text-black text-base font-medium">Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleLogout}
                            className="py-2">
                            <Text className="text-black text-base font-medium">Logout</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            <Text className="text-white text-xl font-medium ml-6">Friends</Text>
            <View className="my-5 mx-6">
                <FlatList
                    data={friends}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className="flex flex-col items-center">
                            <Image source={item.image} />
                            <Text className="text-white text-xl font-medium ml-2">{item.name}</Text>
                        </View>
                    )}
                    numColumns={4}
                    columnWrapperStyle={{ columnGap: 16, justifyContent: "space-between", alignItems: "center" }}
                />
            </View>

            <View className="chat-details bg-primary rounded-t-2xl p-2.5 flex-1">
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className="flex flex-row gap-x-4 items-center my-2.5 border-b-[1px] pb-4 border-white"
                            onPress={() => handleUserClick(item)}
                            activeOpacity={1}
                        >
                            <View>
                                <Image source={item.image} />
                            </View>
                            <View className="flex-1">
                                <Text className="text-black text-xl font-semibold ml-2">{item.name}</Text>
                                <Text className="text-white text-base font-normal ml-2">{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    numColumns={1}
                />
            </View>
        </SafeAreaView>
    );
}