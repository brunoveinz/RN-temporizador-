import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const PickerSelector = ({label, cantidad, valor, onValueChange}) => {
  return (
    <View>
      <Picker selectedValue={valor} onValueChange={onValueChange} style={styles.picker}>
        {[...Array(cantidad).keys()].map((num) => (
          <Picker.Item key={num} label={num} value={num} />
        ))}
      </Picker>
      <Text>{label}</Text>
    </View>

  )
}

export default PickerSelector

const styles = StyleSheet.create({
  picker: {
    width: 100,
    height: 50,
  },
});