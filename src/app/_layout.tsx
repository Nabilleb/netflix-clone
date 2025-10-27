import { Stack } from "expo-router";
import {ThemeProvider, DarkTheme} from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper';

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
        <PaperProvider>
        <Stack screenOptions={{headerShown: false}} />
        </PaperProvider>
        </ThemeProvider>
)
}

export default RootLayout