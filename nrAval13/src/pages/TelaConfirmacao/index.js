import React, {Component, useCallback, useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataStore } from '../../DataStore';

export default function TelaConfirmacao({ route }) {
  const navigation = useNavigation();


   //criacao da funcao ir para pagina de inicio
  function irInicio(){
    navigation.navigate('Inicio');
  }
  
  //funcao ir para pagina de conversoes
  function irConversoes(){
    navigation.navigate('Conversoes');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 

    <Text> Verificando Informações do Modelo</Text>
    <DataStore />

    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
     />

    <Button //botao que chama a funcao ir para tela de conversoesauto
    title="Voltar para Inicio!"
    onPress={ irInicio }
    />

    <Button //botao que chama a funcao ir para tela de conversoesauto
    title="Ir para conversões automáticas "
    onPress={ irConversoes }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 } 