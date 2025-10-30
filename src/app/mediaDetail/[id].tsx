import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mediaDetailedList from "@assets/data/mediaDetailedList.json";
import MediaInfo from "@/components/mediaDetails/MediaInfo";
import { useVideoPlayer, VideoView } from "expo-video";
import MediaHeader from "@/components/mediaDetails/MediaHeader";
import { useEffect, useRef, useState } from "react";
import SeasonSelector from "@/components/mediaDetails/SeasonSelector";
import { Episode } from "@/types/type";
import EpisodeListItem from "@/components/mediaDetails/EpisodeListItem";

function MediaDetail() {
  const { id } = useLocalSearchParams();
  const videoViewRef = useRef<VideoView | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string>("Season 1");
  const [seasonEpisodes, setSeasonsEpisodes] = useState<Episode[]>([])

  const mediaItem = mediaDetailedList.find((media) => media.id === id);
  useEffect(() =>{
if (!mediaItem || mediaItem.type !== 'TV_SERIES') return;
const season = mediaItem.seasons?.find((seasonItem) => seasonItem.seasonName === selectedSeason)
setSeasonsEpisodes(season?.episodes ||[])
  },[selectedSeason])

  if (!mediaItem) {
    return <Text style={{ color: "white" }}>Media Item not found!</Text>;
  }

  const {
    title,
    description,
    releaseYear,
    ageRestriction,
    duration,
    type,
    seasons,
    trailer,
    videoUrl,
    thumbnail,
  } = mediaItem;

  const videoSource =
    type === "MOVIE" ? videoUrl : seasons?.[0].episodes?.[0].videoUrl;

  if (!videoSource) {
    return <Text style={{ color: "white" }}>Media Item not found!</Text>;
  }

  const trailerPlayer = useVideoPlayer(trailer, (player) => {
    player.currentTime = 10;
    player.play();
  });

  const mediaPlayer = useVideoPlayer(videoSource, (player) => {
    player.showNowPlayingNotification = true;
  });

  const onPlayMediaPressed = () => {
    trailerPlayer.pause();
    videoViewRef.current?.enterFullscreen();
    mediaPlayer.play();
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <MediaHeader
        thumbnail={thumbnail}
        trailerPlayer={trailerPlayer}
        mediaPlayer={mediaPlayer}
        videoViewRef={videoViewRef}
      />

      <FlatList
        data={seasonEpisodes} 
        renderItem={({ item }) => <EpisodeListItem episode={item} />}
        ListHeaderComponent={
          <>
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

            {type === "TV_SERIES" && !!seasons && (
              <SeasonSelector
                seasons={seasons}
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
              />
            )}
          </>
        }
      />
    </SafeAreaView>
  );
}

export default MediaDetail;
