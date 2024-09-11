import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const PickerSelector = ({ label, cantidad, valor, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fixedLabel}>{label}</Text>
    
      {/* Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={valor}
          onValueChange={onValueChange}
          style={styles.picker}
        >
          {[...Array(cantidad).keys()].map((num) => (
            <Picker.Item key={num} label={num.toString()} value={num} />
          ))}
        </Picker>
      </View>
    </View>
  )
}

export default PickerSelector

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  fixedLabel: {
    fontSize: 16, // Tamaño de la etiqueta fija
    marginBottom: 5, // Espacio entre la etiqueta y el picker
    textAlign: 'center',
  },
  pickerContainer: {
    width: 150,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
})
