import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddToDo = () => {
    return (
        <View style={styles.AddToDoWrapper}>
            <TextInput style={styles.AddToDoInput}/>
            <Button style={styles.AddToDoButton} title="Add" />
        </View>
    )
}

const styles = StyleSheet.create({
    AddToDoWrapper: {
        flexDirection: 'row'
    },
    AddToDoInput: {
        width: '70%',
        backgroundColor: '#081317',
        color: 'white',
        paddingLeft: 10
    },
    AddToDoButton: {
        backgroundColor: 'red'
    }
})

export default AddToDo