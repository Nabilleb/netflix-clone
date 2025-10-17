import { View, Text } from "react-native";
import { MediaList } from "@/types/type";

type MediaListItemProps ={
  MediaItem:MediaList
}
function MediaListItem({ MediaItem }: MediaListItemProps) {
  return (
    <View>
      <Text style={{ color: 'white' }}>
        {MediaItem.title}
      </Text>
    </View>
  );
}

export default MediaListItem;
