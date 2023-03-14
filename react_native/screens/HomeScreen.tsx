import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {

  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>ホーム画面</Text>
      <StatusBar style="auto" />
      <Button icon="camera">
        Press me
      </Button>
      <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Test')}>
        Move Test Page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
