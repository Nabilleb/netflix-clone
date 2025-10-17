import { Stack } from "expo-router";
import {ThemeProvider, DarkTheme} from '@react-navigation/native'

function RootLayout(){
const myTheme ={
    ...DarkTheme,
    colors:{
        ...DarkTheme.colors,
        primary:'red'
    }
}
    return (
        <ThemeProvider value={myTheme}>
        <Stack screenOptions={{headerShown: false}} />
        </ThemeProvider>
)
}

export default RootLayout