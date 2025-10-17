import { View, Text, Image } from "react-native";
import { MediaListData } from "@/types/type";

type MediaListItemProps ={
  MediaItem:MediaListData
}
function MediaListItem({ MediaItem }: MediaListItemProps) {
  return (
    <View>
      <Image source={{uri:MediaItem.image}} style={{width: 110, aspectRatio: 3/4, marginHorizontal:5, borderRadius: 5}} />
    </View>
  );
}

export default MediaListItem;
