import { StyleSheet, View, Text, TextInput } from "react-native"

export default function ProfileScreen({route}){
    let ssAdmin = '';
    if(route.params.rol == 1){
        ssAdmin = 'El manager tiene permisos de administrador.';
    }else{
        ssAdmin = 'El manager no tiene permisos de administrador.';
    }
    return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#394867', fontSize:24, fontWeight:'bold', marginTop:15}}>Management Session</Text>
        </View>
        <Text>Sesion de : {route.params.name}</Text>
        <Text>{ssAdmin}</Text>
        
    </View>
    )
}