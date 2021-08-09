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

  <Text style={estilo.titulo}> Tecnologia no Brasil: desenvolvimento e prosperidade de um lado, escassez de mão de obra e insegurança jurídica do outro</Text>
<ScrollView>
<Image style={estilo.img} resizeMode={"contain"} source={{uri:'https://thumbs.dreamstime.com/z/dados-comerciais-de-conex%C3%A3o-da-infraestrutura-digital-da-tecnologia-da-informa%C3%A7%C3%A3o-de-brasil-ti-atrav%C3%A9s-do-internet-usando-o-88624076.jpg'}} />

  <Text style={estilo.credito}> Por Marcos Aurélio Pereira -6 de agosto de 2021 </Text>

  <Text style={estilo.conteudo}> Brasil, o país do futuro que nunca chega, ou chegou e alguém o escondeu? Como celeiro do mundo, o País tem um imenso potencial para o desenvolvimento de diversos setores. Agora, é preciso focar nas soluções para os desafios existentes e encontrar maneiras de continuar fomentando a inovação e competitividade interna. A atual estabilidade política e econômica assinala um futuro promissor, com previsões de uma SELIC consolidada no patamar de 4,5% e a inflação entre 3,5 % a 4,0%, e com o legislativo e executivo focados em resolver o emaranhado fiscal – mas com altíssimo risco de complicar a situação.
</Text>
<Text style={estilo.conteudo}>
Quando olhamos especificamente para o setor de tecnologia da informação (TI), combustível essencial para a transformação digital que serve como base para modelos de negócios disruptivos ao gerar inúmeras oportunidades, todos os indicadores são extremamente positivos.
</Text>
<Text style={estilo.conteudo}>
De acordo com o último estudo "Mercado Brasileiro de Software e Serviços" da ABES com a IDC, o crescimento do setor de TI no Brasil está acima da média mundial, e totalmente descolado do PIB brasileiro. Em 2018, registramos um crescimento de 9,8% contra a média mundial de 6,7% – em 2019, a expectativa é de um crescimento interno de 10,5% contra 4,9% global. Considerando esses dados, o desenvolvimento do setor em 2020 não deverá ser diferente, chegando perto de 15% e, quem sabe, atingindo a marca de US$ 60 bilhões em faturamento, ultrapassando o Canadá, que atualmente é o 8º maior mercado mundial, uma posição acima do Brasil.
</Text>
<Text style={estilo.conteudo}>
Outros indicadores que corroboram com uma expectativa positiva para 2020 são os resultados de estudos da EY, Deloitte e McKinsey, que apontam, respectivamente, que 80% dos CEOs veem a inovação tecnológica como forma de manter a empresa competitiva, 74% dos executivos deverão adotar novas tecnologias, e 73% das empresas buscarão novas soluções tecnológicas, como Indústria 4.0.
</Text>
<Text style={estilo.credito}>
Marcos Aurélio Pereira, CEO da Mais Dados Digital. </Text>
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