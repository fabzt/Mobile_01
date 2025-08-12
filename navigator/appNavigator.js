import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calleri from '../screens/Calleri';
import Arboleda from '../screens/Arboleda';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calleri" component={Calleri} />
        <Tab.Screen name="Arboleda" component={Arboleda} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
