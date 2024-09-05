import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Temporizadores from './Screens/Temporizadores';
import CrearTemporizador from './Screens/CrearTemporizador';
import { Ionicons } from '@expo/vector-icons'


const BottomTap = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <BottomTap.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            tabBarActiveTintColor: 'blue'
          }}
        >
        <BottomTap.Screen name="Mis Temporizadores" component={Temporizadores} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="alarm" color={color} size={size} />
            )
          }}
        />
        <BottomTap.Screen 
            name = "Nuevo Temporizador" 
            component={CrearTemporizador}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="time-outline" color={color} size={size} />
              )
            }}          
        />
        </BottomTap.Navigator>
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
