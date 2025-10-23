import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { VideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import { View, Text, ImageBackground,StyleSheet, ActivityIndicator } from "react-native";

type MediaHeaderProps={
  thumbnail: string;
  trailerPlayer: VideoPlayer;
  mediaPlayer: VideoPlayer;
  videoViewRef:React.RefObject<VideoView | null>
}
function MediaHeader(props : MediaHeaderProps) {
  const [isTrailerLoading, setIsTrailerLoading] = useState(true);
  const {thumbnail,trailerPlayer,mediaPlayer, videoViewRef} = props
  return ( 
    <View style={styles.container}>
   <AntDesign
  name="close"
  size={24}
  color="#3b3b3b"
  style={styles.closeIcon}
  onPress={() => router.back()}
/>
{isTrailerLoading && (
     <ImageBackground source={{uri:thumbnail}} style={[StyleSheet.absoluteFill, styles.ImageBackground]}>
       <ActivityIndicator size="large" color="white" />
      </ImageBackground>
)}
      <VideoView 
      player={trailerPlayer}
      style={[StyleSheet.absoluteFill]}
      onFirstFrameRender={() => setIsTrailerLoading(false)}
      />
      <VideoView 
      ref={videoViewRef}
      player={mediaPlayer}
      onFullscreenExit={() =>{
        mediaPlayer.pause()
        trailerPlayer.play()
      }}
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
