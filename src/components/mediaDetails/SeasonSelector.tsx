import { Entypo } from "@expo/vector-icons"
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native"
import { Menu } from "react-native-paper"

function SeasonSelector(){
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

return(
    


<Menu
  visible={isMenuVisible}
  onDismiss={() => setIsMenuVisible(false)}
  contentStyle={styles.menuContent}
  anchor={
    <Pressable style={styles.anchorContainer} onPress={() => setIsMenuVisible(true)}>
      <Text style={styles.SelectSeasonText}>Season 1</Text>
      <Entypo name="chevron-thin-down" size={15} color="#b7b7b7" />
    </Pressable>
  }
>
  {/* Menu items go here */}
  <Menu.Item onPress={() => {}} title="Season 1" />
  <Menu.Item onPress={() => {}} title="Season 2" />
  <Menu.Item onPress={() => {}} title="Season 3" />
</Menu>

)
}

const styles = StyleSheet.create({
menuContent: {
    backgroundColor: '#282828',
    marginTop: 5,
    borderRadius: 10,
},

anchorContainer:{
flexDirection:'row',
alignContent:'center',
backgroundColor:'#282828',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 3,
gap: 5,
marginTop: 10,
marginLeft:10,
alignSelf: 'flex-start'
},

SelectSeasonText:{
    color: '#b7b7b7',
    fontWeight:500,

}
})
export default SeasonSelector