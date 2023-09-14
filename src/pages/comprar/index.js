import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function comprar() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        
        <Text style={styles.message}>Finalizar o seu pedido</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.combo}>Combo 30 peças</Text>
      <Text style={styles.title}>
      5 Uramaki Filadelphia ( Salmão com cream cheese )
      10 Uramaki Salmão Grelhado com geléia de pimenta
      10 Uramaki Skin
      5 Hossomaki Patê com Cream Cheese.</Text>
      <Text style={styles.compra}>Local de Entrega</Text>
      <Text style={styles.title}>Avenida Paulo Roberto Vidal, 1455 - Condomínio Terra Nova Palhoça (Casa 1067) </Text>
      <Text style={styles.button}>Comprar</Text>
      </Animatable.View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44F2F'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'   
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 15,
    marginTop: 28

  },
  compra: {
    fontSize: 30,
    marginTop: 28

  },
  combo: {
    fontSize: 20,
    marginTop: 28

  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#ff087f',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  registerText: {
  color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#F44F2F',
    borderRadius: 50,
    paddingVertical: 20,
    width: '60%',
    alignSelf: 'center',
    bottom: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 21,
    textAlign: 'center',
    color: '#fff',
  }
})