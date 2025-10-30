import { ImageBackground, View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Episode } from "@types/types";

type EpisodeListItemProps = {
  episode: Episode;
};

export default function EpisodeListItem({ episode }: EpisodeListItemProps) {
  const { episodeThumbnail, episodeDescription, episodeTitle, episodeNumber, duration, videoUrl } = episode;

  return (
    <Pressable style={styles.container} onPress={() => console.log("Pressed!")}>
      <View style={styles.episodeContainer}>
        <ImageBackground source={{ uri: episodeThumbnail }} style={styles.imageBackground}>
          <FontAwesome name="play" size={12} color="white" style={{ marginLeft: 2 }} />
        </ImageBackground>
        <View style={{gap:2}}>
         <View style={{flexDirection:'row'}}>
        <Text style={styles.episodeText}>{episodeNumber}. </Text>
        <Text style={styles.episodeText}>{episodeTitle}</Text>
         </View>
        <Text style={styles.duration}>{duration}m</Text>
        </View>
      </View>
              <Text style={styles.desc}>{episodeDescription}</Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
   container: {
paddingHorizontal: 15,
marginBottom: 15,
marginTop:10,
gap:5

  },
  imageBackground: {
    width: 100,
    aspectRatio: 3 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  episodeContainer: {
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
 episodeText: {
  color:'#ADADAD',
  fontWeight:'700',

 },

duration :{
color:'#999999',
fontSize:12,
fontWeight:'500'
},

desc:{
color:'#ADADAD',
fontWeight:'500',

}
});
