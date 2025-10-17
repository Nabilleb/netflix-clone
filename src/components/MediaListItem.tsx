import { View, Text } from "react-native";
import { MediaListData } from "@/types/type";

type MediaListItemProps ={
  MediaItem:MediaListData
}
function MediaListItem({ MediaItem }: MediaListItemProps) {
  return (
    <View>
      <Text style={{ color: 'white' }}>
        {MediaItem.id}
      </Text>
    </View>
  );
}

export default MediaListItem;
