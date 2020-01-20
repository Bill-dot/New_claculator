import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Tabs_keys from '../components/Tabs_keys'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_1}>
                <TextInput
                    placeholder="Enter"
                />
            </View>

            <View style={styles.container_2}>
                <Tabs_keys textToBeDisplayed='C' />
                <Tabs_keys textToBeDisplayed='<' />
                <Tabs_keys textToBeDisplayed='%' />
                <Tabs_keys textToBeDisplayed='/' />
                <Tabs_keys textToBeDisplayed='7' />
                <Tabs_keys textToBeDisplayed='8' />
                <Tabs_keys textToBeDisplayed='9' />
                <Tabs_keys textToBeDisplayed='X' />
                <Tabs_keys textToBeDisplayed='4' />
                <Tabs_keys textToBeDisplayed='5' />
                <Tabs_keys textToBeDisplayed='6' />
                <Tabs_keys textToBeDisplayed=' -' />
                <Tabs_keys textToBeDisplayed='1' />
                <Tabs_keys textToBeDisplayed='2' />
                <Tabs_keys textToBeDisplayed='3' />
                <Tabs_keys textToBeDisplayed='+' />
                <Tabs_keys textToBeDisplayed='E' />
                <Tabs_keys textToBeDisplayed= '0'/>
                <Tabs_keys textToBeDisplayed=' .' />
                <Tabs_keys textToBeDisplayed='=' />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
        backgroundColor: '#cc6600'
    },

    container_1: {
        flex: 1,
        alignSelf:'flex-end',
        justifyContent:"flex-end"
    },

    container_2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent:'center',
        marginBottom:15,
        marginRight:10
        
        
    },

})

export default MainScreen