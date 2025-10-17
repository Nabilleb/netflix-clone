import { View, Text, FlatList, StyleSheet } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import MediaListItem from "@/components/MediaListItem";

function HomeScreen() {
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 17,
    color: "white",
    fontWeight: "700", 
    paddingVertical: 10,
  },
});

export default HomeScreen;
