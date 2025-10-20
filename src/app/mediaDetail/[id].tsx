import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import mediaDetailedList from '@assets/data/mediaDetailedList.json'

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
    return(
        <SafeAreaView>
            <Text style={{color:'white'}}>{mediaItem.title}</Text>
        </SafeAreaView>
    )
}

export default mediaDetail