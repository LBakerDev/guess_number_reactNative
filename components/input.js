import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, style, value }) => {

    return (
        <TextInput
            onChangeText={onChangeText}
            style={{ ...styles.input, ...style }}
            keyboardType="numeric"
            maxLength={2}
            value={value}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        // backgroundColor: 'black'
    }
})

export default Input;