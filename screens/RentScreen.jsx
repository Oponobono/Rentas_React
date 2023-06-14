import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
import {styles} from '../components/styles';
import { cars } from '../components/arrays';
import { users } from '../components/arrays';
import { rents } from '../components/arrays';


export default function RentScreen() {
    const [user, setUser] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [daydate, setDayDate] = useState('');
    const [alertRent, setAlertRent] = useState('');

    let rentsCount = rents.length + 1;
    let idrent = rentsCount;

    function registerRent(idrent, user, pnumber, daydate) {
      if (user === "" || pnumber === "" || daydate === "") {
          if (user === "" && pnumber === "" && daydate === ""){
              setAlertRent("Debe completar el formulario");
          } else {
              if (user === "") {
                  setAlertRent("Debe ingresar el usuario arrendatario");
              } else if (pnumber === "") {
                  setAlertRent("Debe ingresar la Placa del Vehiculo");
              } else {
                  setAlertRent("Debe especificar la fecha de la renta");
              }
          }
      } else {
          let uFind = users.find(u => u.username === user);
          let carIndex = cars.findIndex(c => c.pnumber === pnumber);
          console.log(carIndex);
          console.log(cars[carIndex].state);
          if (uFind === undefined) {
              setAlertRent('El usuario de la renta no se encuentra registrado en el sistema');
          } else if (carIndex === -1) {
              setAlertRent('No se ha encontrado un vehiculo registrado con la placa ingresada');
          } else {
              let newRent = {idrent, user, pnumber, daydate};
              rents.push(newRent);
              setAlertRent("Renta Registrado");
              cars[carIndex].state = "No disponible";
              console.log(cars[carIndex].state);
              setUser('');
              setPnumber('');
              setDayDate('');
              console.log(rents);
              console.log(cars);
          }
      }
  }
  

  return (
    <View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'#394867', fontSize:24, fontWeight:'bold', marginTop:15}}>Renta de Vehiculos</Text>
      </View>

      <View style={{alignItems:(Dimensions.get('window').width >500 ? 'left' : 'center'), marginStart:(Dimensions.get('window').width > 500 ? 20 : 0)}}>
        <Text style={{color:'#394867', fontSize:18, fontWeight:'bold', marginTop:15}}>Registrar Nueva Renta</Text>
      </View>


      <View>
        <View style={{flexDirection:(Dimensions.get('window').width > 500 ? 'row' : 'column' ), justifyContent: (Dimensions.get('window').width > 500 ? 'space-between' : 'center'),  alignItems: 'center', marginTop: 10, marginStart:20, marginEnd:20}}>
            <TextInput
                style={{maxWidth:100, height:40, marginEnd:10, textAlign: 'center'}}
                editable={false}
                selectTextOnFocus={false}
                label="ID Rent"
                mode="outlined"
                value={idrent}
                theme={{ roundness: 10 }}
            />
            <TextInput
                style={{maxWidth:200, height:40, marginEnd:10}}
                label="Usuario"
                mode="outlined"
                left={<TextInput.Icon icon="trademark"/>}
                onChangeText={setUser}
                value={user}
                theme={{ roundness: 10 }}
            />
            <TextInput
                style={{maxWidth:200, height:40, marginEnd:10}}
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="car-key"/>}
                onChangeText={setPnumber}
                value={pnumber}
                theme={{ roundness: 10 }}
            />
            <TextInput
                style={{maxWidth:200, height:40, marginEnd:10}}
                label="Fecha"
                mode="outlined"
                left={<TextInput.Icon icon="trademark"/>}
                onChangeText={setDayDate}
                value={daydate}
                theme={{ roundness: 10 }}
            />

            <Button
                style={{width:200, height:40, marginTop:10, marginEnd:10}}
                icon="car-multiple"
                mode="contained"
                onPress={() => registerRent(idrent,user,pnumber,daydate)}
            >Guardar
            </Button>
        </View>
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'red', fontSize:14, fontWeight:'bold', marginTop:10}}>{alertRent}</Text>
      </View>

      <View style={{alignItems: 'center', marginStart:(Dimensions.get('window').width > 500 ? 20 : 0)}}>
        <Text style={{color:'#394867', fontSize:18, fontWeight:'bold', marginTop:15}}>Rentas Activas</Text>
      </View>

      <View style={styles.containercar}>
        <View style={styles.tableRow}>
          <Text style={styles.header}>ID</Text>
          <Text style={styles.header}>Usuario</Text>
          <Text style={styles.header}>Vehiculo</Text>
          <Text style={styles.header}>Fecha</Text>
        </View>
        {rents.map((rent, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{rent.idrent}</Text>
            <Text style={styles.cell}>{rent.user}</Text>
            <Text style={styles.cell}>{rent.pnumber}</Text>
            <Text style={styles.cell}>{rent.daydate}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}