import React, { useState } from 'react';
import { Text, View, Switch} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
import {styles} from '../components/styles';
import { cars } from '../components/arrays';

export default function CarScreen() {
  const [pnumber, setPnumber] = useState('');
  const [brand, setBrand] = useState('');
  const [alertCar, setAlertCar] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  let state ="";


  function registerCar(pnumber, brand, state) {
    if (pnumber === "" || brand === "" || state === "") {
        if (pnumber === "" && brand === "" && state === ""){
            setAlertCar("Debe completar el formulario");
        }else{
            if (pnumber === "") {
                setAlertCar("Debe ingresar la Placa del Vehiculo");
            }else if (brand === "") {
                setAlertCar("Debe ingresar la Marca del Vehiculo");
            }else{
                setAlertCar("Debe especificar la disponibilidad del Vehiculo");
            }
        }
    } else {
      let carFind = cars.find(car => car.pnumber === pnumber );
      if(carFind) {
        setAlertCar('La placa ya se encuentra registrada');
      }else{
        let newCar = {pnumber, brand, state};
        cars.push(newCar);
        setAlertCar("Vehiculo Registrado");
        console.log(cars);
      }
    }
  }

  return (
    <View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'#394867', fontSize:24, fontWeight:'bold', marginTop:15}}>Vehiculos</Text>
      </View>

      <View style={{alignItems:(Dimensions.get('window').width >500 ? 'left' : 'center'), marginStart:(Dimensions.get('window').width > 500 ? 20 : 0)}}>
        <Text style={{color:'#394867', fontSize:18, fontWeight:'bold', marginTop:15}}>Registrar Nuevo Vehiculo</Text>
      </View>


      <View>
        <View style={{flexDirection:(Dimensions.get('window').width > 500 ? 'row' : 'column' ), justifyContent: (Dimensions.get('window').width > 500 ? 'space-between' : 'center'),  alignItems: 'center', margin:10}}>
          <TextInput
              style={{maxWidth:250, height:40, margin:10}}
              label="Placa"
              mode="outlined"
              left={<TextInput.Icon icon="car-key"/>}
              onChangeText={setPnumber}
              value={pnumber}
              theme={{ roundness: 10 }}
          />
          <TextInput
              style={{maxWidth:250, height:40, margin:10}}
              label="Marca"
              mode="outlined"
              left={<TextInput.Icon icon="trademark"/>}
              onChangeText={setBrand}
              value={brand}
              theme={{ roundness: 10 }}
          />
          <TextInput
              style={{maxWidth:250, height:40, margin:10}}
              label="Estado"
              mode="outlined"
              left={<TextInput.Icon icon="car"/>}
              value={isEnabled ? 'Disponible': 'No Disponible'}
              theme={{ roundness: 10 }}
              editable={false}
              selectTextOnFocus={false}
          />

          <View style={styles.container}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <Button
              style={{width:200, height:40, marginTop:10, marginEnd:10}}
              icon="car-multiple"
              mode="contained"
              onPress={() => registerCar(pnumber, brand, state=isEnabled ? "Disponible" : "No Disponible")}
          >Guardar
          </Button>

        </View>
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'red', fontSize:14, fontWeight:'bold'}}>{alertCar}</Text>
      </View>

      <View style={{alignItems:'center', marginStart:(Dimensions.get('window').width > 500 ? 20 : 0)}}>
        <Text style={{color:'#394867', fontSize:18, fontWeight:'bold', marginTop:15}}>Vehiculos Registrados</Text>
      </View>

      <View style={styles.containercar}>
        <View style={styles.tableRow}>
          <Text style={styles.header}>Placa</Text>
          <Text style={styles.header}>Marca</Text>
          <Text style={styles.header}>Estado</Text>
        </View>
        {cars.map((car, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{car.pnumber}</Text>
            <Text style={styles.cell}>{car.brand}</Text>
            <Text style={styles.cell}>{car.state}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}