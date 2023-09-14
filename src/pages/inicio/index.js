import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function inicio() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        
        <Text style={styles.message}>O que você vai querer hoje?</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <TouchableOpacity 
          style={ styles.title}
          onPress={ () => navigation.navigate('comprar')} >
      <Text style={styles.combo}>Combo 30 peças</Text>
      <Text style={styles.title}>
      5 Uramaki Filadelphia ( Salmão com cream cheese )
      10 Uramaki Salmão Grelhado com geléia de pimenta
      10 Uramaki Skin
      5 Hossomaki Patê com Cream Cheese.
</Text>
      <Text style={styles.combo}>Combo 40 peças</Text>
      <Text style={styles.title}>
        10 Uramaki Skin
        10 Uramaki Patê Salmão
        10 Urami Filadélfia (salmão c/ cream cheese)
        10 Futomaki (salmão, crem cheese e pepino)</Text>
        <Text style={styles.combo}>Combo 50 peças</Text>
      <Text style={styles.title}>
      5 Uramaki Califórnia
      5 Uramaki Patê de Salmão
      5 Uramaki Filadélfia ( Salmão com cream cheese )
      5 Uramaki Skin
      5 Uramaki Kani
      5 Uramaki Salmão Grelhado
      6 Nigiris Variados (1 salmão, 1 atum, 1 peixe branco, 1 skin, 1 kani, 1 tamagô)
      4 Hossomaki Tekka maki (atum)
      10 Hot Filadélfia (salmão c/ cream cheese)</Text>
      <Text style={styles.combo}>Ceviche de salmão</Text>
      <Text style={styles.title}>
      Salmão picados em cubos com cebola e gergelim marinado no limão</Text>
      <Text style={styles.combo}>Ceviche de salmão</Text>
      <Text style={styles.title}>
      Arroz, Salmão, Couve crispy, Crispy de batata e Alho poró</Text>
           
           </TouchableOpacity>
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
  color: '#a1a1a1'
  }
})