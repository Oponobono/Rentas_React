import react from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Importar Pantallas
import ProfileScreen from './screens/ProfileScreen.jsx';
import HomeTabs from './screens/HomeTabs.jsx';
import RegisterUser from './screens/RegisterUser.jsx';
import CarScreen from './screens/CarScreen.jsx';


//Constantes
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'Rentas CM Cars'}} />
        <Stack.Screen name="Register" component={RegisterUser} options={{title:'Registro de Usuarios'}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}}/>
        <Stack.Screen name="Cars" component={CarScreen} options={{title:'Vehiculos'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
