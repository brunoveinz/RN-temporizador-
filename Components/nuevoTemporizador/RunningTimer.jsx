import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButtons from '../ux/MyButtons'
import AlertTemp from './AlertTemp';




const RunningTimer = ({initialHours, initialMinutes, initialSeconds, onAlert, onStop}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [ShowAlarm, setShowAlarm] = useState(false)

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
        setShowAlarm(true);
      }
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [hours, minutes, seconds]);


  if (ShowAlarm){
    return(
      <AlertTemp
        onStop={onStop}
      />
    )
  }
  
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
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  timerContainer: {
    marginTop: 200,          
  },
  buttonContainer: {
    
  },
  timer:{
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20
  }
})
