import { View, Text, Image, Pressable } from "react-native";
import { MediaListData } from "@/types/type";
import { Link } from "expo-router";


type MediaListItemProps ={
  MediaItem:MediaListData
}
function MediaListItem({ MediaItem }: MediaListItemProps) {
  return (
 <Link href={`mediaDetail/${MediaItem.id}`}  asChild>
  <Pressable>
    <Image
      source={{ uri: MediaItem.image }}
      style={{ width: 110, aspectRatio: 3 / 4, marginHorizontal: 5, borderRadius: 5 }}
    />
  </Pressable>
</Link>

  );
}

export default MediaListItem;
