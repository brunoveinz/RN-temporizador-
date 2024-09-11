import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButtons from '../ux/MyButtons'

const RunningTimer = ({initialHours, initialMinutes, initialSeconds, onStop}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);


  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(timer);
        onStop(); // Llama a la función onStop cuando el temporizador llega a 0
      }
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [hours, minutes, seconds]);

  
  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButtons title='Detener' onPress={onStop} color='red' />
      </View>
    </View>
  )
}

export default RunningTimer

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',  // Centra verticalmente
    alignItems: 'center',      // Centra horizontalmente
  },
  timerContainer: {
    marginTop: 200,          // Espacio entre el texto y el botón
  },
  buttonContainer: {
    
  },
  timer:{
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20
  }
})
