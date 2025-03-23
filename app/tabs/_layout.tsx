import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Calls from "./Calls"
import Contact from "./contact"
import Settings from "./settings"
import Home from "./home"
import Message from "./message"

export default function TabLayout() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator >
            <Tabs.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Tabs.Screen name="Message" component={Message} options={{ headerShown: false }} />
            <Tabs.Screen name="Calls" component={Calls} options={{ headerShown: false }} />
            <Tabs.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            <Tabs.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          
        </Tabs.Navigator>
    )
}
