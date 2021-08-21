import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddToDo = () => {
    return (
        <View style={styles.AddToDoWrapper}>
            <TextInput style={styles.AddToDoInput} />
            <Button style={styles.AddToDoButton} title="Add" />
        </View>
    )
}

const styles = StyleSheet.create({
    AddToDoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        padding: 30
    },
    AddToDoInput: {
        borderRadius: 3,
        width: '70%',
        backgroundColor: '#80bcff',
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10
    },
    AddToDoButton: {
    
    }
})

export default AddToDo