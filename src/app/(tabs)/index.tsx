import { View, Text, FlatList,StyleSheet } from "react-native";
import mediaList from '@assets/data/mediaList.json'
import MediaListItem from "@/components/MediaListItem";

function HomeScreen(){
return(
<View>
    <FlatList 
    data={mediaList}
    renderItem={({item}) => <Text style={styles.sectionTitle}> {item.title}</Text>}
    />

 </View>
);
}

const styles = StyleSheet.create({
    sectionTitle:{
        fontSize: 17,
        color:'white',
        fontWeight:700,
        paddingVertical: 10
    }
})
export default HomeScreen