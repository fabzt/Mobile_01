import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'; 

export default function Arboleda() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}> 
        <Text style={styles.title}>CONHEÇA OS JOGADORES DO SÃO PAULO</Text>

        <Image source={require('../assets/images/arboleda_image.jpg')} style={styles.image}/>  
        
        <Text style={styles.name}>ARBOLEDA</Text>
        <Text style={styles.name}>"ARBOLENDA"</Text>

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