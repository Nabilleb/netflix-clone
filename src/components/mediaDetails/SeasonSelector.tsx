import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Menu } from "react-native-paper";
import { Season } from "@/types/type";

type SeasonSelectorProps = {
  seasons: Season[];
  selectedSeason: string;
  setSelectedSeason: React.Dispatch<React.SetStateAction<string>>;
};

function SeasonSelector(props: SeasonSelectorProps) {
  const { selectedSeason, seasons, setSelectedSeason } = props;
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onHandleSeasonChange = (newSeason: string) => {
    setSelectedSeason(newSeason);
    setIsMenuVisible(false);
  };

  return (
    <View style={{ zIndex: 10 }}> 
      <Menu
        visible={isMenuVisible}
        onDismiss={() => setIsMenuVisible(false)}
        contentStyle={styles.menuContent}
        anchorPosition="bottom"
        anchor={
          <Pressable
            style={styles.anchorContainer}
            onPress={() => setIsMenuVisible(true)}
          >
            <Text style={styles.SelectSeasonText}>{selectedSeason}</Text>
            <Entypo name="chevron-thin-down" size={15} color="white" />
          </Pressable>
        }
      >
        {seasons?.map((season) => (
          <Menu.Item
            key={season.seasonName}
            title={season.seasonName}
            titleStyle={styles.menuStyle}
            style={{ height: 40 }}
            onPress={() => onHandleSeasonChange(season.seasonName)}
          />
        ))}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContent: {
    backgroundColor: "#282828",
    marginTop: 5,
    borderRadius: 10,
  },
  anchorContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    gap: 5,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  SelectSeasonText: {
    color: "white",
    fontWeight: "500",
  },
  menuStyle: {
    color: "white",
    fontWeight: "500",
  },
});

export default SeasonSelector;
