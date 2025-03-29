import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { TokenContext, UsernameContext } from '../Context/Context';
import styles from '../Helpers/styles';
import { getTodoLists, createTodoList, deleteTodoList } from '../API/todoList';


export default function TodoLists({ navigation }) {

    const [username] = useContext(UsernameContext);
    const [token] = useContext(TokenContext);
    const [newTodoText, setNewTodoText] = useState('');
    const [todoLists, setTodoLists] = useState([]); // State for todo lists
    const [message, setMessage] = useState('');

    // Fetch todo lists when component mounts or when username/token changes
    useEffect(() => {
        const fetchTodoLists = async () => {
            const lists = await getTodoLists(username, token);
            setTodoLists(lists);
        };

        fetchTodoLists();
    }, [username, token]);

    // Function to create a new todo list
    const create = async () => {
        if (newTodoText.trim() && newTodoText.length <= 50) {
            setMessage('');
            await createTodoList(username, newTodoText, token);
            setNewTodoText('');
            // Optionally refresh the list after creating a new todo
            const updatedLists = await getTodoLists(username, token);
            setTodoLists(updatedLists);
        } else {
            setMessage('Format de la liste non conforme');
        }
    };

    // Function to handle delete action
    const supprime = async (id) => {
        await deleteTodoList(id, token);
        // Refresh the list after deletion
        const updatedLists = await getTodoLists(username, token);
        setTodoLists(updatedLists);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Les TodoListes que vous avez :</Text>
            <View style={styles.addView}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNewTodoText}
                    placeholder="Créer une nouvelle Liste"
                    placeholderTextColor="#999"
                    onSubmitEditing={create}
                    value={newTodoText}
                />
                <TouchableOpacity style={styles.btnAffichage} onPress={create}>
                    <Text style={styles.btnText}>Créer</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: 'red' }}>{message}</Text>

            <FlatList
                data={todoLists} // Use the state variable
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.list}
                        onPress={() => navigation.navigate('Details', { listId: item.id }) }> 
                        <Text style={styles.itemText}>{item.title}</Text>

                        <TouchableOpacity onPress={() => supprime(item.id)}>
                            <Image source={require('../assets/trash-can-outline.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
