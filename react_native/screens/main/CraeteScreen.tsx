import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';


export default function CreateScreen() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text>問題を作成するページ</Text>
      <StatusBar style="auto" />
      <Button icon="camera">
        Press me
      </Button>
      <Button icon="camera" mode="contained" onPress={() => navigation.push('Test')}>
        Move Test Page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
