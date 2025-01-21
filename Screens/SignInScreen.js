import React, {useState, useContext} from 'react';
import { View, TextInput, Text,TouchableOpacity} from 'react-native';
import { TokenContext, UsernameContext } from '../Context/Context';
import styles from '../Helpers/styles';

import { signIn } from '../API/sign';

export default function SignInScreen ({ navigation }) {
    const [username, setUsername] = useContext(UsernameContext)
    const [token, setToken] = useContext(TokenContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submit = () => {
        signIn(login, password).then(t => {
            setToken(t)
            setUsername(login)
        }).catch(e => setError(e.message)) 
        setUsername(login)
        console.log("identifié!!");
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.container} >
            <Text style={styles.titre}>Sign In Screen</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                placeholderTextColor="#999"
                value={login}
                onChangeText={setLogin}
                returnKeyType="next"  // Adds "next" button in the keyboard
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"  // Adds "done" button in the keyboard
                onSubmitEditing={submit}  // Submits the form when Enter is pressed on password field
            />
            <TouchableOpacity style={styles.btnAffichage} onPress={submit}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <Text>{error}</Text>
        </View>
    )
}