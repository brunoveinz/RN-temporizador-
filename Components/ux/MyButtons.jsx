import { StyleSheet, Text,Pressable } from 'react-native'
import React from 'react'

const MyButtons = ({title, onPress, color}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, { backgroundColor: color }, pressed && styles.buttonPressed]}  >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default MyButtons

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonPressed: {
    opacity: 0.6,  // Reduce la opacidad cuando el botón está presionado
  },
})