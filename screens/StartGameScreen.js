import React, { useState } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = () => {
    const [inputValue, setInputValue] = useState('Input here');
    return (
        <>
            <View style={styles.screen}>
                <Text
                    style={styles.title}>Start a New Game
                </Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => setInputValue(text)}
                        value={inputValue}
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

            </View>
            <Text>{inputValue}</Text>
        </>
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
    textInput: {
        fontSize: 15
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