import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import alarmSound from '../../assets/sounds/iphone-notificacion.mp3';
import MyButtons from '../ux/MyButtons';

const AlertTemp = ({ onStop }) => {
  useEffect(() => {
    playSound();
  }, []);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(alarmSound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>¡Tiempo terminado!</Text>
        <MyButtons title='Terminar' onPress={onStop} color='black'/>
      </View>
    </View>
  );
};

export default AlertTemp;

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});