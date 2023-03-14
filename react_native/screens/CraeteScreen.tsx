import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text>問題を作成するページ</Text>
      <StatusBar style="auto" />
      <Button icon="camera">
        Press me
      </Button>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
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
