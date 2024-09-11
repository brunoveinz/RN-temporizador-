import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PickerSelector from './PickerSelector';
import MyButtons from '../ux/MyButtons';
import RunningTimer from './RunningTimer';

const FormTempo = () => {
  const [isRunning, SetIsRunning] = useState(false)
  const [segundos, SetSegundos] = useState(0);
  const [horas, SetHoras] = useState(0);
  const [minutos, SetMinutos] = useState(0);

  useEffect(() => {
    console.log(horas, minutos, segundos)
  }, [segundos, horas, minutos])

  function StartTemporizadorHandler(){
    SetIsRunning(true)
  }

  function StopTemporizadorHandler(){
    SetIsRunning(false)
  }

  if (isRunning) {
    return (
      <RunningTimer
        initialHours={horas}
        initialMinutes={minutos}
        initialSeconds={segundos}
        onStop={StopTemporizadorHandler}
      />
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.column}>
          <PickerSelector label='Horas' cantidad={25} valor={horas} onValueChange={(value) => { SetHoras(value) }} />
        </View>
        <View style={styles.column}>
          <PickerSelector label='Minutos' cantidad={60} valor={minutos} onValueChange={(value) => { SetMinutos(value) }} />
        </View>
        <View style={styles.column}>
          <PickerSelector label='Segundos' cantidad={60} valor={segundos} onValueChange={(value) => { SetSegundos(value) }} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MyButtons title='Iniciar' onPress={StartTemporizadorHandler} color='blue' />
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

    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: '100%', // Hace que el Picker use el ancho del contenedor
    height: 50, // Limita la altura del Picker
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  }
})
