import react from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import {styles} from '../components/styles';
import { users } from '../components/arrays';

export default function RegisterUser({navigation}){
    const handlePasswordVisibility = () => {
        setIsSecureEntry(prevState => !prevState)
        setIconPass(prevState => prevState === 'eye' ? 'eye-off' : 'eye')
    }
    
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [iconPass, setIconPass] = useState("eye")
    const [alertName, setAlertName] = useState('');
    const [alertUsername, setAlertUsername] = useState('');
    const [alertPassw, setAlertPassw] = useState('');
    const [alertRol, setAlertRol] = useState('');

    function registerUser(name, username, password, rol) {
        if (name === "" || username === "" || password === "" || rol === "") {
            if (name === "" && username === "" && password === "" && rol === ""){
                setAlertName("Debe completar el formulario");
            }else{
                if (name === "") {
                    setAlertName("Debe ingresar el nombre");
                    setAlertUsername('');
                    setAlertPassw('');
                    setAlertRol('');
                }else if (username === "") {
                    setAlertUsername("Debe ingresar el nombre de usuario");
                    setAlertName('');
                    setAlertPassw('');
                    setAlertRol('');
                }else if (password === "") {
                    setAlertPassw("Debe ingresar la contraseña");
                    setAlertName('');
                    setAlertUsername('');
                    setAlertRol('');
                }else{
                    setAlertRol("Debe ingresar el rol");
                    setAlertName('');
                    setAlertUsername('');
                    setAlertPassw('');
                }
            }
        } else {
            let uFind = users.find(user => user.username === username)
            if(uFind){
                setAlertName("Ya existe un usuario con ese nombre de usuario");
            }else{
            let newUser = {name, username, password, rol};
            users.push(newUser);
            setAlertName("Usuario Registrado");
            console.log(users);
            navigation.goBack();
            }
        }
    }



    return (
        <View style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#394867', fontSize:24, fontWeight:'bold'}}>Registro de Nuevos Usuarios</Text>
            </View>

            <Text style={{color:'red'}}>{alertName}</Text>

            <TextInput
                style={{marginBottom:10, marginTop:15}}
                label="Nombre"
                mode="outlined"
                left={<TextInput.Icon icon="account-circle"/>}
                onChangeText={setName}
                value={name}
                theme={{ roundness: 10 }}
            />
            <Text style={{color:'red'}}>{alertUsername}</Text>
            <TextInput
                style={{marginBottom:10}}
                label="Username"
                mode="outlined"
                left={<TextInput.Icon icon="account-circle"/>}
                onChangeText={setUsername}
                value={username}
                theme={{ roundness: 10 }}
            />
            <Text style={{color:'red'}}>{alertPassw}</Text>
            <TextInput
                style={{marginBottom:10}}
                label="Password"
                mode="outlined"
                secureTextEntry={isSecureEntry}
                left={<TextInput.Icon icon={iconPass} onPress={handlePasswordVisibility} />}
                onChangeText={setPassword}
                value={password}
                theme={{ roundness: 10 }}
            />
            <Text style={{color:'red'}}>{alertRol}</Text>
            <TextInput
                style={{marginBottom:10}}
                label="Rol"
                mode="outlined"
                left={<TextInput.Icon icon="account-circle"/>}
                onChangeText={setRol}
                value={rol}
                theme={{ roundness: 10 }}
            />

            <Button
                style={{marginTop:10}}
                icon="account-check"
                mode="contained"
                onPress={() => registerUser(name, username, password, rol)}
            >Registrar
            </Button>

        </View>
    )
}