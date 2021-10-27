//importar elementos necessários 
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
 

//funcao para o inicio
export default function Inicio({ route }) {
  const navigation = useNavigation(); // (usenavigation: funcao padrao importada de react-navigation)

 
 
  //navegando para a tela de inspecao externa1(proxima tela)
  function irInspecaoExterna1(){
    navigation.navigate('InspecaoExterna1');
  }

 

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 
    

    
    <Button //botão que chama a funcao ir para a pg inspecao externa 1
    title="Ir para Inspeção Externa 1"
    onPress={ irInspecaoExterna1 }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }