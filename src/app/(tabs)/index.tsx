import { View, Text, FlatList, StyleSheet } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import MediaListItem from "@/components/MediaListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';

function HomeScreen() {
  return (
    <SafeAreaView>
        <View>
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}> For Nabil</Text>
            <Feather name="search" size={22} color="white" />
        </View>
        <Text>TV Shows</Text>
        <Text>Movies</Text>
        <Text>Categories</Text>
        </View>
      <FlatList
        data={mediaList}
        keyExtractor={(item) => item.id?.toString() ?? item.title}
        renderItem={({ item: VerticalListItem }) => (
          <View>
            <Text style={styles.sectionTitle}>{VerticalListItem.title}</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={VerticalListItem.data}
              keyExtractor={(item) => item.id?.toString() ?? item}
              renderItem={({ item: HorizontalListItem }) => (
                <MediaListItem MediaItem={HorizontalListItem} />
              )}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 17,
    color: "white",
    fontWeight: "700", 
    paddingVertical: 10,
  },

  headerTitle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  headerTitleContainer:{
flexDirection:'row',
justifyContent:'space-between'
  }
});

export default HomeScreen;
