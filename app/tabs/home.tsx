import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";

const Tab = createBottomTabNavigator();


const messages = [
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
]

export default function Home() {

    const router = useRouter();
    const friends = [
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


    ]

 
    const handleUserClick = (id: number) => {
        router.push("/tabs/message")
    }
    return (
        <SafeAreaView className="bg-homebg flex-1">

            <View className="mt-10 mb-5 mx-6 flex flex-row  items-center">
                <View className="flex flex-row items-center flex-1 gap-x-1 relative">

                    <TextInput className="text-black text-base font-normal outline-none border-[1px] bg-[#F3F6F6] p-1 border-[#F3F6F6] rounded-md w-full" placeholder="Search Friends..." />
                </View>
                <Image source={require("../../assets/images/profile.png")} className="ml-4 w-9 h-9" />
            </View>

            <Text className="text-white text-xl font-medium ml-6">Friends</Text>
            <View className="my-5 mx-6">
                <FlatList
                    data={friends}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <View className="flex flex-col items-center">
                        <Image source={item.image} />
                        <Text className="text-white text-xl font-medium ml-2">{item.name}</Text>
                    </View>}
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
                            onPress={() => handleUserClick(item.id)}
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
    )
}