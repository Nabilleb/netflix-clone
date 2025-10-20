import React from "react";
import { View, Text, Pressable } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
type MediaInfoProps = {
  title: string;
  releaseYear: number;
  ageRestriction: string;
  duration?: number;
  type: string;
  desc: string;
};


function MediaInfo(props: MediaInfoProps){
const {title, releaseYear, ageRestriction, duration, desc, type}= props
    return(
        <View>
            <Text style={{color:'white'}}> {title} </Text>
            <View>
            <Text style={{color:'white'}}> {releaseYear} </Text>
            <Text style={{color:'white'}}> {ageRestriction} </Text>
            <Text style={{color:'white'}}> {duration} </Text>
            </View>
            <Pressable>
            <FontAwesome5 name="play" size={20} color="white" />
            <Text style={{color:'white'}}> play </Text>
            </Pressable>
            <Text style={{color:'white'}}> {desc} </Text>
        </View>
    )

}

export default MediaInfo