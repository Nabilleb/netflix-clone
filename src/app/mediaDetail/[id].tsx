import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mediaDetailedList from '@assets/data/mediaDetailedList.json';
import MediaInfo from "@/components/mediaDetails/MediaInfo";
import { useVideoPlayer, VideoView } from "expo-video";
import MediaHeader from "@/components/mediaDetails/MediaHeader";
import { useRef, useState } from "react";
import SeasonSelector from "@/components/mediaDetails/SeasonSelector";

function MediaDetail() {
  const { id } = useLocalSearchParams();
  const videoViewRef = useRef<VideoView | null>(null)
const [selectedSeason, setSelectedSeason] = useState<string>("Season 1");
const mediaItem = mediaDetailedList.find(media => media.id === id);

  if (!mediaItem) {
    return <Text style={{ color: 'white' }}>Media Item not found!</Text>;
  }

  const { title, description, releaseYear, ageRestriction, duration, type, seasons, trailer, videoUrl, thumbnail } = mediaItem;
  const videoSource = type === 'MOVIE' ? videoUrl : seasons?.[0].episodes?.[0].videoUrl;

  if (!videoSource) {
    return <Text style={{ color: 'white' }}>Media Item not found!</Text>;
  }

 const trailerPlayer = useVideoPlayer(trailer, player => {
     player.currentTime = 10;
     player.play();
 });

 const mediaPlayer = useVideoPlayer(videoSource, player => {
     player.showNowPlayingNotification = true;
 });

 const onPlayMediaPressed = () =>{
  trailerPlayer.pause()
  videoViewRef.current?.enterFullscreen()
  mediaPlayer.play()
 }


  return (
    <SafeAreaView>
      <MediaHeader 
      thumbnail={thumbnail}
      trailerPlayer={trailerPlayer}
      mediaPlayer={mediaPlayer}
      videoViewRef = {videoViewRef}
      />
      <MediaInfo
        title={title}
        releaseYear={releaseYear}
        ageRestriction={ageRestriction}
        duration={duration}
        type={type}
        desc={description}
        nrOfSeasons={seasons?.length}
        onPlayMediaPressed={onPlayMediaPressed}
      />

    <SeasonSelector />
    </SafeAreaView>
  );
}

export default MediaDetail;
