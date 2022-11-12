import { StyleSheet, Text, View } from 'react-native';
import { GuessingUI } from './Components/GuessingUI';


export default function App() {
  return (
    <View style={styles.container}>
      <GuessingUI></GuessingUI>
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
