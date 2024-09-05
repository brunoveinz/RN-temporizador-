import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import PickerSelector from './PickerSelector';

const FormTempo = () => {
  const [segundos, SetSegundos] = useState(0);
  const [horas, SetHoras] = useState(0);
  const [minutos, SetMinutos] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <PickerSelector label= 'Horas' cantidad={25} valor={horas} onValueChange={(value) => {SetHoras(value)}}/>
      </View>
      <View style={styles.column}>
        <PickerSelector label='Minutos' cantidad={60} valor={minutos} onValueChange={(value) => {SetMinutos(value)}}/>
      </View>
      <View style={styles.column}>
        <PickerSelector label='Segundos' cantidad={60} valor={segundos} onValueChange={(value) => {SetSegundos(value)}}/>
      </View>
      
    </View>
  )
}

export default FormTempo

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})