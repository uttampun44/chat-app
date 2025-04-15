import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pusher, PusherEvent } from '@pusher/pusher-websocket-react-native';
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";


interface messageFields {
  message: string
}
export default function Message() {

  const pusher = Pusher.getInstance();

  const { control } = useForm<messageFields>();

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
      {/* message received */}
      <View>
        <Text className="text-primary text-sm font-medium">Message Received</Text>
      </View>

      <View>
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value || ""}
              className="w-full border-b-[1px] border-primary outline-none mt-2.5 text-base font-medium"
            />
          )}
          rules={{ required: true }}
        />
        <TouchableOpacity className="bg-homebg  rounded-lg px-4 py-2 mt-5">
          <Text className="text-sm font-bold text-primary text-center">Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}