import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import mediaDetailedList from '@assets/data/mediaDetailedList.json'
import MediaInfo from "@/components/mediaDetails/MediaInfo"

function mediaDetail(){
    const {id} = useLocalSearchParams();
    const mediaItem = mediaDetailedList.find((media) => media.id === id)

    if (!mediaItem){
        return(
            <Text style={{color:'white'}}>
                Media Item is not found!
            </Text>
        )
    }
    const {title,description, releaseYear, ageRestriction, duration, type, seasons} = mediaItem
    return(
        <SafeAreaView>
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
    )
}

export default mediaDetail