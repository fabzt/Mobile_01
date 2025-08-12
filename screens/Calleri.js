import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity, Button } from 'react-native'; 

export default function Calleri() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}> 
        <Text style={styles.title}>CONHEÇA OS JOGADORES DO SÃO PAULO</Text>
        
        <Image source={require('../assets/images/calleri_image.jpg')} style={styles.image}/> 
        
        <Text style={styles.name}>CALLERI</Text>
        <Text style={styles.name}>O TERROR DA LIBERTADORES</Text>

         

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#780606',
  },

  contentContainer: { 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    top: 40,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  title: {
    top: 40,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  image: {
    top: 40,
    width: 300,
    height: 400,
  },
});