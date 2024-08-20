import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import FlatCards from '@/components/FlatCards';
import ElevatedCards from '@/components/ElevatedCards';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatCards />
        <ElevatedCards />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});