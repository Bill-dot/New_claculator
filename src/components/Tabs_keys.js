import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Tabs_keys = ({ textToBeDisplayed }) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>{console.log("pressed")}}>
                <Text style={styles.text}>{textToBeDisplayed}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {

        fontSize: 40,
        paddingHorizontal: 30,
        margin: 6,
        backgroundColor:'#663300',
        borderRadius:50,
        paddingBottom:2



    }
})

export default Tabs_keys;