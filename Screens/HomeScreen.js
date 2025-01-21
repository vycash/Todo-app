import {useState, useContext} from 'react';
import { TokenContext, UsernameContext } from '../Context/Context';
import { StyleSheet, View, TextInput, Text,TouchableOpacity} from 'react-native';
import styles from '../Helpers/styles';
import TodoLists from '../components/TodoLists';

export default function HomeScreen({ navigation }) {
    const [username] = useContext(UsernameContext);

    const navigateToTodoLists = () => {
        navigation.navigate('TodoLists'); // Navigate to TodoListsScreen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Welcome to your TodoApp!</Text>
            <Text style={styles.text}>You are logged in as {username}</Text>
            <TouchableOpacity style={styles.btnHome} onPress={navigateToTodoLists}>
                <Text style={styles.btnText}>Go to Todo Lists</Text>
            </TouchableOpacity>
        </View>
    );
}