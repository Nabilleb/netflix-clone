import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mediaDetailedList from '@assets/data/mediaDetailedList.json';
import MediaInfo from "@/components/mediaDetails/MediaInfo";
import { useVideoPlayer } from "expo-video";
import MediaHeader from "@/components/mediaDetails/MediaHeader";

function MediaDetail() {
  const { id } = useLocalSearchParams();
  const mediaItem = mediaDetailedList.find(media => media.id === id);

  if (!mediaItem) {
    return <Text style={{ color: 'white' }}>Media Item not found!</Text>;
  }

  const { title, description, releaseYear, ageRestriction, duration, type, seasons, trailer, videoUrl } = mediaItem;
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

  return (
    <SafeAreaView>
      <MediaHeader />
      <MediaInfo
        title={title}
        releaseYear={releaseYear}
        ageRestriction={ageRestriction}
        duration={duration}
        type={type}
        desc={description}
        nrOfSeasons={seasons?.length}
      />


    </SafeAreaView>
  );
}

export default MediaDetail;
