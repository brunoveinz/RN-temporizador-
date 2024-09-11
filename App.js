import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Temporizadores from './Screens/Temporizadores';
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from './constants/Colors';

const BottomTap = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <BottomTap.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            tabBarLabelStyle: {
              fontWeight: 'bold', // Establece la fuente en negrita
            },
          }}
        >
        <BottomTap.Screen name="Temporizador" component={Temporizadores} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="alarm" color={color} size={size} />
            )
          }}
        />
        </BottomTap.Navigator>
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({});
