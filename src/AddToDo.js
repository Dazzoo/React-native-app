import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddToDo = ({ onSubmitHandler }) => {
    const [TextValue, setTextValue] = useState('')

    const onSubmit = (TextValue) => {
        if(TextValue.length !== 0){
            onSubmitHandler(TextValue)
            setTextValue('')
        }
    }

    return (
        <View style={styles.AddToDoWrapper}>
            <TextInput style={styles.AddToDoInput} placeholder='Type your task to add'  onChangeText={(text) => setTextValue(text)} value={TextValue} />
            <Button style={styles.AddToDoButton} title="Add" onPress={() => onSubmit(TextValue) } />
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