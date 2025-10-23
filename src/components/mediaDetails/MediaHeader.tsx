import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { VideoPlayer, VideoView } from "expo-video";
import { View, Text, ImageBackground,StyleSheet } from "react-native";

type MediaHeaderProps={
  thumbnail: string;
  trailerPlayer: VideoPlayer;
  mediaPlayer: VideoPlayer
}
function MediaHeader(props : MediaHeaderProps) {
  const {thumbnail,trailerPlayer,mediaPlayer} = props
  return (
    <View style={styles.container}>
   <AntDesign
  name="close"
  size={24}
  color="#3b3b3b"
  style={styles.closeIcon}
  onPress={() => router.back()}
/>
      <ImageBackground source={{uri:thumbnail}} style={[StyleSheet.absoluteFill, styles.ImageBackground]} />
      <VideoView 
      player={trailerPlayer}
      style={[StyleSheet.absoluteFill]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  height:226,
  width: '100%'
  },
  ImageBackground: {
justifyContent: 'center',
opacity:0.6
  },
  closeIcon: {
    zIndex:1,
  alignSelf:'flex-end',
  padding:10
  }
})
export default MediaHeader;
