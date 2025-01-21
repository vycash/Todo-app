import React, {useState, useContext} from 'react';
import { TokenContext, UsernameContext } from '../Context/Context';
import { View, Text,Button,TouchableOpacity} from 'react-native';
import { signIn } from '../API/sign';
import styles from '../Helpers/styles';

export default function SignInScreen ({ navigation }) {
    const [username, setUsername] = useContext(UsernameContext)
    const [token, setToken] = useContext(TokenContext)
    const [error, setError] = useState('')

    const submit = () => {
        setUsername(null);
        setToken(null);
        console.log("logged out");
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Sign Out Screen</Text>
            <TouchableOpacity style={styles.btnAffichage} onPress={submit}>
                <Text style={styles.btnText}>Sign Out</Text>
            </TouchableOpacity>
            <Text>{error}</Text>
        </View>
    )
}