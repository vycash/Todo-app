import React, {useState, useContext} from 'react';
import { View, TextInput, Text,TouchableOpacity} from 'react-native';
import { TokenContext, UsernameContext } from '../Context/Context';
import styles from '../Helpers/styles';

import { signUp } from '../API/sign';

export default function SignInScreen ({ navigation }) {
    const [username, setUsername] = useContext(UsernameContext)
    const [token, setToken] = useContext(TokenContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submit = () => {
        signUp(login, password).then(t => {
            setToken(t)
            setUsername(login)
        }).catch(e => setError(e.message))
        setUsername(login)
        console.log("user Créé!!");
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.container} >
            <Text style={styles.titre}>Sign Up Screen</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                placeholderTextColor="#999"
                value={login}
                onChangeText={setLogin}
                returnKeyType="next"  
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"  
                onSubmitEditing={submit}
            />
            <TouchableOpacity style={styles.btnAffichage} onPress={submit}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <Text>{error}</Text>
        </View>
    )
}