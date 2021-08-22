import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Navbar = () => {
    return (
        <View style={styles.NavbarWrapper} >
            <Text style={styles.NavbarText}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    NavbarWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        backgroundColor: '#5E64C9',
    },
    NavbarText: {
        fontSize: 17,
        color: 'white',
        paddingBottom: 7,
        fontFamily: 'OpenSans-Light'
    }
})

export default Navbar