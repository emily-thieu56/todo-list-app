import { View, Text } from 'react-native'
import React from 'react'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const [tasks, setTasks] = useState
(
  [
  'Do laundry',
  'Go to gym',
  'Walk dog'
  ]
);

const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
};

const Stack = createStackNavigator();

export default function App(){
    return(
      <NavigationContainer>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="About" component={AboutScreen} />
      </NavigationContainer>
        
    )
}
