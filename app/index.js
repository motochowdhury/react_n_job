import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

// External Import
import {COLORS, incons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                }
            }} />
        </SafeAreaView>
    )
}

export default Home;