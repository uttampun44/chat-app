import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from '../signup/signup';

export default function HomeScreen() {
  return (
    
        <SafeAreaView>
          <SignUp />
        </SafeAreaView>
    
  );
}

