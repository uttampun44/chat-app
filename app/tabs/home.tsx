import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Home() {

    const friends = [
        {
            id: 1,
            name: "Adil",
            image: require("../../assets/images/friendOne.png")
        },
        {
            id: 2,
            name: "Marina",
            image: require("../../assets/images/friendTwo.png")
        },
        {
            id: 3,
            name: "Dean",
            image: require("../../assets/images/friendThree.png")
        },
        {
            id: 4,
            name: "John Doe",
            image: require("../../assets/images/friendFour.png")

        }
    ]

    return (
        <SafeAreaView className="bg-homebg h-screen">
         
            <View className="my-10 mx-6 flex flex-row justify-between items-center">
                <Image source={require("../../assets/images/Search.png")} />
                <Text className="text-white text-xl font-medium text-center">Home</Text>
                <Image source={require("../../assets/images/profile.png")} />
            </View>

            <Text className="text-white text-xl font-medium ml-6">Friends</Text>
            <View className="flex flex-row justify-between items-center my-10 mx-6">
                <FlatList
                    data={friends}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <View>
                        <Image source={item.image} />
                        <Text className="text-white text-xl font-medium ml-2">{item.name}</Text>
                    </View>}
                    numColumns={4}
                    className="friends-row *:gap-x-4"

                />

            </View>
        </SafeAreaView>
    )
}