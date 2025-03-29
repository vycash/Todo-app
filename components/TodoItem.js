import React,{useState,useEffect} from "react";
import { View, StyleSheet, Switch,Text,Button,Image,TouchableOpacity,onPress } from 'react-native';
import styles from '../Helpers/styles';

export default function TodoItem(props){

    const [done,setDone] = useState(props.item.done);

    useEffect(() => {
        setDone(props.item.done); // Met à jour l'état lorsque la prop change
    }, [props.item.done]);

    return (
        <View style={styles.item}>
            <View style={styles.elementGauche}>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={done ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    // la valeur de done est changée dans le parent et localement dans le fils pour voir le resultat visuellement
                    onValueChange={() => { props.changeItem(props.item.id); setDone(!done);}}  
                    value={done}
                />
                <Text style={[styles.itemText, { textDecorationLine: done ? 'line-through' : 'none' }]}> 
                    {props.item.content}
                </Text>
            </View>


            <TouchableOpacity style={styles.trashcan} onPress={() => {props.deleteTodo(props.item.id)}}>
                <Image source={require('/assets/trash-can-outline.png')} style={{height:20, width:20}}/>
            </TouchableOpacity>
        </View>
    )
}