import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import FlatCards from '@/components/FlatCards';
import ElevatedCards from '@/components/ElevatedCards';
import PopularCity from '@/components/PopularCity';
import BlogCard from '@/components/BlogCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <PopularCity />
          <BlogCard />
        </View>
      </ScrollView>
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