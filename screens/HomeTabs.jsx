import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import CarScreen from './CarScreen';
import RentScreen from './RentScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor:'#F1F6F9',
            tabBarInactiveTintColor:'#394867',
            tabBarActiveBackgroundColor: '#394867',
            headerShown:false,
            }}
        >
            {/* options={{tabBarStyle:{display:'none'} */}
            <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="login" size={25}/>),tabBarStyle:{display:'none'}}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="account-box" size={25}/>)}}/>
            <Tab.Screen name="Cars" component={CarScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="list" size={25}/>)}}/>
            <Tab.Screen name="Rents" component={RentScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="check" size={25}/>)}}/>
        </Tab.Navigator>
    )
}