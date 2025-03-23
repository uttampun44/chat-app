import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Calls from "./Calls"
import Contact from "./contact"
import Settings from "./settings"
import Home from "./home"
import Message from "./message"
import { Image, View } from "react-native"

export default function TabLayout() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator >
            <Tabs.Screen name="Message" component={Home} options={{ headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <View>
                             <Image source={require("../../assets/images/message.png")}  />
                        </View>
                    )
                },
                tabBarActiveTintColor: "#24786D",
            }} />
            <Tabs.Screen name="Contact" component={Contact} options={{ headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <View>
                             <Image source={require("../../assets/images/user.png")}  />
                        </View>
                    )
                },
                tabBarActiveTintColor: "#24786D",
             }} />
            <Tabs.Screen name="Settings" component={Settings} options={{ headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return (
                        <View>
                             <Image source={require("../../assets/images/settings.png")}  />
                        </View>
                    )
                },
                tabBarActiveTintColor: "#24786D",
             }} />
          
        </Tabs.Navigator>
    )
}
