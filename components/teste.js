import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Castoro_400Regular,
  Castoro_400Regular_Italic,
} from '@expo-google-fonts/castoro';

export default function Cloud(){

  let [fontsLoaded] = useFonts({
    Castoro_400Regular,
    Castoro_400Regular_Italic,
  });
    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(

<View style={estilo.container}>

  <Text style={estilo.titulo}> xxxxx </Text>
<ScrollView>
<Image style={estilo.img} resizeMode={"contain"} source={{uri:'https://thumbs.dreamstime.com/z/dados-comerciais-de-conex%C3%A3o-da-infraestrutura-digital-da-tecnologia-da-informa%C3%A7%C3%A3o-de-brasil-ti-atrav%C3%A9s-do-internet-usando-o-88624076.jpg'}} />

<Text style={estilo.credito}> xxxx </Text>
<Text style={estilo.conteudo}> xx </Text>
<Text style={estilo.conteudo}> xxx </Text>
<Text style={estilo.conteudo}> xxx </Text>
<Text style={estilo.conteudo}> xx </Text>
<Text style={estilo.credito}> xxx </Text>

</ScrollView>
</View>
  );
  }
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  img:{
width: largura,
height: 350,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
marginTop: 25,
textAlign: 'center',
fontSize: 20,
marginBottom: 20,
backgroundColor: '#6495ED',
color: '#F0FFFF',
 fontFamily: 'Castoro_400Regular_Italic',
  },
  conteudo:{
fontSize: 18,
textAlign:"justify",
margin: 10,
padding: 5

  },
  credito:{
marginTop: 20,
marginBottom: 20,
fontSize: 10,
textAlign: 'left',
  }
});