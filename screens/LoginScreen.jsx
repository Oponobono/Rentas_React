import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Button, Title } from 'react-native-paper';
import { useState } from 'react';
import WavyBackground from "react-native-wavy-background";
import { users } from '../components/arrays';
import {styles} from '../components/styles';

//Constantes
const Stack = createNativeStackNavigator();
console.log(users)
let isessions = 1;

export default function LoginScreen({navigation}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [iconPass, setIconPass] = useState("eye")

    const handlePasswordVisibility = () => {
        setIsSecureEntry(prevState => !prevState)
        setIconPass(prevState => prevState === 'eye' ? 'eye-off' : 'eye')
    }

    return (
        <View style={styles.container}>
        <WavyBackground
            height={300}
            width={1100}
            amplitude={25}
            frequency={1}
            offset={150}
            color="#1F618D"
            bottom
        />
        <Title>Inicio</Title>
        <Text style={{color:'red'}}>{errormsg}</Text>
        <TextInput
            style={{marginBottom:10}}
            label="Usuario"
            mode="outlined"
            left={<TextInput.Icon icon="account-circle"/>}
            onChangeText={username => setUsername(username)}
            value={username}
            theme={{ roundness: 10 }}
        />
        <TextInput
            style={{marginBottom:10}}
            label="Password"
            mode="outlined"
            secureTextEntry={isSecureEntry}
            left={<TextInput.Icon icon={iconPass} onPress={handlePasswordVisibility} />}
            onChangeText={password => setPassword(password)}
            value={password}
            theme={{ roundness: 10 }}
        />

        <Button
            icon="door"
            mode="contained"
            onPress={() => {
            let uFind = users.find(user => user.username === username && user.password === password);
            if(uFind != undefined) {
                const {name, username} = uFind
                navigation.navigate('Profile', {name:name,username:username, rol: uFind.rol,});
                setUsername('');
                setPassword('');
                setErrorMsg('Sesion Iniciada')
            }else{
                setErrorMsg('Usuario y/o contraseña incorrectos');
            }}}
        >Ingresar
        </Button>

        <Button
            style={{marginTop:10}}
            icon="account-multiple-plus"
            mode="contained"
            onPress={() => {
                navigation.navigate('Register')
            }}
        >Registrar
        </Button>

        </View>
    )
}

