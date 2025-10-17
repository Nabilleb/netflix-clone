import { View, Text, FlatList, StyleSheet } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import MediaListItem from "@/components/MediaListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';

function HomeScreen() {
  return (
    <SafeAreaView>
        <View style={styles.headerContainer}> 
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}> For Nabil</Text>
            <Feather name="search" size={22} color="white" />
        </View>
        <View style={{flexDirection:'row', gap:5}}>
        <Text style={styles.filterText}>TV Shows</Text>
        <Text style={styles.filterText}>Movies</Text>
        <Text style={styles.filterText}>Categories</Text>
        </View>
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
  },
  filterText:{
    color:'lightgrey',
    fontSize:12,
    borderWidth:1, 
    borderColor:'lightgrey',
    borderRadius:15,
    fontWeight:'bold',
    paddingVertical:5,
    paddingHorizontal:10
  },
  headerContainer:{
    marginHorizontal:10,
    gap:10
  }
});

export default HomeScreen;
