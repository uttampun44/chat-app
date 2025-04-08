import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pusher, PusherEvent } from '@pusher/pusher-websocket-react-native';
import { useEffect } from "react";


export default function Message() {

  const pusher = Pusher.getInstance();

  const pusherConnection = async () => {
    try {
      await pusher.init({
        apiKey: "d5efa0dbabfcefc2d866",
        cluster: "ap2"
      });

      await pusher.connect();
      await pusher.subscribe({
        channelName: "chat",
        onEvent: (event: PusherEvent) => {
          console.log(`Event received: ${event}`);
        }
      });
    } catch (error) {

    }
  }
  useEffect(() => {
    pusherConnection()
  }, [])


  return (
    <SafeAreaView>

      <Text>Message</Text>
    </SafeAreaView>
  )
}