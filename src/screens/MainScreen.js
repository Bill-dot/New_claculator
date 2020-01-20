import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import Tabs_keys from '../components/Tabs_keys'

const MainScreen = () => {
    const [state, setState] = useState([])
    const [variable, setVariable] = useState([])

    let a,b,c,x; 
    const variable1 = () => {
        a = state;
        console.log(state.findIndex('2'))
        b = a.toString()
        c = parseFloat(b);
        console.log(c)
    }
    const variable2 = () => {
        let b = 0
        b = state;
        return setVariable(...variable, b);
    }
    const validate_cal = () => {

        a = [];
        a.push(state.split(' '))
        switch (x) {
            case '+':

                b=parseFloat(a[1].toString())
                console.log(b)
                return  setState(c+b) 
            case '-':
                     b=parseFloat(a[1].toString())
                     console.log(b)
                    return setState(c-b) 
            case '/':
                   b=parseFloat(a[1].toString())
                    console.log(b)
                    return setState(c/b)
            case 'X':
                    b=parseFloat(a[1].toString())
                    console.log(b)
                    return setState(c*b)
            case '%': 
                    b=parseFloat(a[1].toString())
                    console.log(b)
                    return setState(c/b) * 100 
            default:
                return state
        }





    }

    const calculate = (opt) => {
        return setState(() => {
            a[0]
        })
    }


    const identifyPress = (key) => {
        // if (key == '<') {
        //     state.pop()
        //     return setState([...state])
        // } else if (key == 'C') {
        //     return setState([])
        // } else {
        //     return setState([...state, key])
        // }

        switch (key) {
            case '<':
                state.pop()
                return setState([...state])
            case 'C':
                return setState([])
            case '=':
                
                return validate_cal()
            case '+':
                 x=key
                variable1()
                return setState([...state,'', key])
            case '-':
                 x=key
                variable1()
                return setState([...state,'', key])    

            case '/':
                 x=key
                variable1()
                return setState([...state,'', key])
            case 'X':
                 x=key
                variable1()
                return setState([...state,'', key])
            default:
                return setState([...state, key])
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_1}>
                <Text

                    style={{
                        fontSize: 60,
                        marginRight: 18
                    }}

                >{state}</Text>
            </View>

            <View style={styles.container_2}>
                <Tabs_keys textToBeDisplayed='C' Press={() => identifyPress('C')} />
                <Tabs_keys textToBeDisplayed='<' Press={() => identifyPress('<')} />
                <Tabs_keys textToBeDisplayed='%' Press={() => identifyPress('%')} />
                <Tabs_keys textToBeDisplayed='/' Press={() => identifyPress('/')} />
                <Tabs_keys textToBeDisplayed='7' Press={() => identifyPress('7')} />
                <Tabs_keys textToBeDisplayed='8' Press={() => identifyPress('8')} />
                <Tabs_keys textToBeDisplayed='9' Press={() => identifyPress('9')} />
                <Tabs_keys textToBeDisplayed='X' Press={() => identifyPress('X')} />
                <Tabs_keys textToBeDisplayed='4' Press={() => identifyPress('4')} />
                <Tabs_keys textToBeDisplayed='5' Press={() => identifyPress('5')} />
                <Tabs_keys textToBeDisplayed='6' Press={() => identifyPress('6')} />
                <Tabs_keys textToBeDisplayed=' -' Press={() => identifyPress('-')} />
                <Tabs_keys textToBeDisplayed='1' Press={() => identifyPress('1')} />
                <Tabs_keys textToBeDisplayed='2' Press={() => identifyPress('2')} />
                <Tabs_keys textToBeDisplayed='3' Press={() => identifyPress('3')} />
                <Tabs_keys textToBeDisplayed='+' Press={() => identifyPress('+')} />
                <Tabs_keys textToBeDisplayed='e' Press={() => identifyPress('e')} />
                <Tabs_keys textToBeDisplayed='0' Press={() => identifyPress('0')} />
                <Tabs_keys textToBeDisplayed=' .' Press={() => identifyPress('.')} />
                <Tabs_keys textToBeDisplayed='=' Press={() => identifyPress('=')} />

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
        alignSelf: 'flex-end',
        justifyContent: "flex-end"
    },

    container_2: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        marginBottom: 15,
        marginRight: 10


    },

})

export default MainScreen