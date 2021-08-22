import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Navbar from './src/Navbar'
import AddToDo from './src/AddToDo'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
    const [todoList, setTodoList] = useState([])


    const onSubmitHandler = (NewTextValue) => {
        setTodoList((prev) => [{
            id: Date.now().toString(),
            title: NewTextValue
        }, ...prev])

    }
  return (
          <View style={styles.container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                  <Navbar/>
                  <AddToDo onSubmitHandler={onSubmitHandler}/>
                  {todoList.map((todo) => <Text style={styles.toDoItem} key={todo.id
                  } >{todo.title}</Text>)}
              </ImageBackground>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffcccb'
  },
    image: {
        flex: 1,
        justifyContent: "flex-start"
    },
    toDoItem: {
      backgroundColor: 'rgba(47,248,249, 0.8)',
        padding: 5,
        margin: 5,
        borderRadius: 8

    }
});
