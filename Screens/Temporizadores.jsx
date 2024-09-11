import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView } from 'react-native';
import FormTempo from '../Components/nuevoTemporizador/FormTempo';

const Temporizadores = () => {
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

export default Temporizadores;

const styles = StyleSheet.create({

});