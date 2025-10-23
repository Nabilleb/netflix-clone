import React from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

type MediaInfoProps = {
  title: string;
  releaseYear: number;
  ageRestriction: string;
  duration?: number;
  type: string;
  desc: string;
  nrOfSeasons?:number;
  onPlayMediaPressed: () => void;
};

const { width } = Dimensions.get('window');

function MediaInfo(props: MediaInfoProps) {
  const { title, releaseYear, ageRestriction, duration, desc, type, nrOfSeasons, onPlayMediaPressed } = props;
  
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>{title}</Text>
      
      
      <View style={styles.metadataContainer}>
        <View style={styles.metadataRow}>
          <Text style={styles.metaInfoText}>{releaseYear}</Text>
          <View style={styles.ageBadge}>
            <Text style={styles.ageText}>{ageRestriction}</Text>
          </View>
          {duration && (
            <>
              <View style={styles.dotSeparator} />
              <Text style={styles.metaInfoText}>
                {type ==="MOVIE"? `${Math.floor(duration/60)}h ${duration%60}m`: `${nrOfSeasons} seasons`}
              </Text>
            </>
          )}
          <View style={styles.dotSeparator} />
          <Text style={styles.metaInfoText}>{type}</Text>
        </View>
      </View>

      
      <Pressable style={styles.playButton} onPress={() => onPlayMediaPressed()}>
        <View style={styles.playButtonContent}>
          <FontAwesome5 name="play" size={16} color="black" />
          <Text style={styles.playButtonText}>Play</Text>
        </View>
      </Pressable>

      
      <Text style={styles.description} numberOfLines={3}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  metadataContainer: {
    marginBottom: 16,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  metaInfoText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '500',
  },
  ageBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  ageText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  dotSeparator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#cccccc',
    marginHorizontal: 8,
  },
  playButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: width * 0.4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  description: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
});

export default MediaInfo;