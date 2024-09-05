import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView } from 'react-native';
import FormTempo from '../Components/nuevoTemporizador/FormTempo';

const CrearTemporizador = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <FormTempo/>
        </View>
        <View>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default CrearTemporizador;

const styles = StyleSheet.create({

});