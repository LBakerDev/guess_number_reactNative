import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/input'

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (number) => {
        setEnteredValue(number.replace(/[^0-9]/g, ''))
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        } }>
            <View style={styles.screen}>
                <Text
                    style={styles.title}>Start a New Game
                </Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    {/* <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => setInputValue(text)}
                        value={inputValue}
                    /> */}
                    <Input
                        onChangeText={numberInputHandler}
                        style={styles.input}
                        autoCapitalize={false}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View
                            style={styles.button}>
                            <Button
                                color={Colors.accent}
                                onPress={() => { }} title='Reset'>
                            </Button>
                        </View>
                        <View
                            style={styles.button}>
                            <Button
                                color={Colors.primary}
                                onPress={() => { }}
                                title='Confirm'>
                            </Button>
                        </View>
                    </View>
                </Card>
                <Text>{enteredValue}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        fontSize: 15,
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    button: {
        width: 120,
        borderColor: 'black',
        // borderWidth: 1,
        // borderRadius: 10
    }
})

export default StartGameScreen;