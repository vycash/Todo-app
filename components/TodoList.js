import React, { useState, useEffect, useContext } from "react";
import { View, TextInput, Text, FlatList, TouchableOpacity, progress } from 'react-native';
import { TokenContext, UsernameContext } from '../Context/Context';
import { createTodo, getTodos, updateTodo, deleteTodo as apiDeleteTodo } from '../API/todo';

import TodoItem from './TodoItem'; 
import styles from '../Helpers/styles';

export default function TodoList(props) {

    const listId = props.listId;

    const [username] = useContext(UsernameContext);
    const [token] = useContext(TokenContext);

    const [todos, setTodos] = useState([]);
    const [allTodo, setAllTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [newTodoText, setNewTodoText] = useState('');

    var progressCount = 0;
    if ( allTodo != null &&  allTodo.length>0 ){ progressCount = Math.round((count / allTodo.length) * 100);  }

    // Fetch todos when the component mounts or listId/token changes
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todoData = await getTodos(listId, token);
                setTodos(todoData);
                setAllTodos(todoData);
                setCount(todoData.filter((item) => item.done).length);
            } catch (error) {
                console.error("Error fetching todos: ", error);
            }
        };

        fetchTodos();
    }, [listId, token]);

    const changeItem = async (id) => {
        try {
            const updatedTodos = todos.map((item) => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item;
            });
            setTodos(updatedTodos);
            setCount(updatedTodos.filter(item => item.done).length);
            // Update the todo on the server
            const updatedItem = updatedTodos.find(item => item.id === id);
            await updateTodo(id, updatedItem.done, token);
        } catch (error) {
            console.error("Error updating todo: ", error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await apiDeleteTodo(id, token);
            const newTodos = todos.filter(item => item.id !== id);
            setTodos(newTodos);
            setAllTodos(newTodos);
            setCount(newTodos.filter(item => item.done).length);
        } catch (error) {
            console.error("Error deleting todo: ", error);
        }
    };

    const addNewTodo = async () => {
        if (newTodoText.trim() !== '') {
            try {
                const newTodo = await createTodo(newTodoText, listId, token);
                // Assuming `createTodo` returns the created todo with its new ID
                setTodos([...todos, newTodo]);
                setAllTodos([...allTodo, newTodo]);
                setNewTodoText('');
            } catch (error) {
                console.error("Error creating new todo: ", error);
            }
        }
    };

    const showDoneItems = () => {
        const doneTodos = allTodo.filter(item => item.done);
        setTodos(doneTodos);
        setCount(doneTodos.length);
    };

    const showUnDoneItems = () => {
        const undoneTodos = allTodo.filter(item => !item.done);
        setTodos(undoneTodos);
        setCount(0);
    };

    const showAll = () => {
        setTodos(allTodo);
        setCount(allTodo.filter(item => item.done).length);
    };

    const checkAll = async () => {
        try {
            // Create a new array with all items marked as 'done: false'
            const updatedTodos = await Promise.all(
                allTodo.map(async (item) => {
                    await updateTodo(item.id, true, token); // Update each item on the server
                    return { ...item, done: true }; // Return the updated item
                })
            );
    
            // Update the state with the new list
            setTodos(updatedTodos);
            setAllTodos(updatedTodos);
            setCount(updatedTodos.length); // All items are unchecked, so count is 0
        } catch (error) {
            console.error("Error updating todos: ", error);
        }
    };

    const checkNone = async () => {
        try {
            // Create a new array with all items marked as 'done: false'
            const updatedTodos = await Promise.all(
                allTodo.map(async (item) => {
                    await updateTodo(item.id, false, token); // Update each item on the server
                    return { ...item, done: false }; // Return the updated item
                })
            );
    
            // Update the state with the new list
            setTodos(updatedTodos);
            setAllTodos(updatedTodos);
            setCount(0); // All items are unchecked, so count is 0
        } catch (error) {
            console.error("Error updating todos: ", error);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Tasks of {username} in the list</Text>
            <View style={styles.addView}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNewTodoText}
                    placeholder="saisir ici un nouvel item"
                    placeholderTextColor="#999"
                    onSubmitEditing={addNewTodo}
                    value={newTodoText}
                />
                <TouchableOpacity style={styles.btnAffichage} onPress={addNewTodo}>
                    <Text style={styles.btnText}>Ajouter</Text>
                </TouchableOpacity>
            </View>
    
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>Filtrer les taches : </Text>
                <TouchableOpacity style={styles.btnAffichage} onPress={showAll}>
                    <Text style={styles.btnText}>Tout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAffichage} onPress={showUnDoneItems}>
                    <Text style={styles.btnText}>En cours</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAffichage} onPress={showDoneItems}>
                    <Text style={styles.btnText}>Résolus</Text>
                </TouchableOpacity>
            </View>
    
            <Text style={styles.countText}>Nombre de taches effectuées : {count}</Text>

            <View style={styles.progressContainer}>
                <progress style={styles.progress} value={count} max={allTodo.length} />
                <Text style={styles.textProgress}>{progressCount}%</Text>
            </View>
            
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    
                    <TodoItem item={item} changeItem={changeItem} deleteTodo={handleDeleteTodo} />
                )}
                contentContainerStyle={styles.flatListContent} // Optional styling for FlatList
            />
    
            {/* Check All / Check None buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnHome} onPress={checkNone}>
                    <Text style={styles.btnText}>Check None</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnHome} onPress={checkAll}>
                    <Text style={styles.btnText}>Check All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}
