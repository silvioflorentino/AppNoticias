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

  <Text style={estilo.titulo}> Cloud Computing: o recurso que definirá o futuro dos negócios </Text>
<ScrollView>
<Image style={estilo.img} resizeMode={"contain"} source={{uri:'http://s.glbimg.com/po/tt/f/original/2012/03/02/cloudcomputing.jpg'}} />

  <Text style={estilo.credito}> Por Marcos Aurélio Pereira -6 de agosto de 2021 </Text>

  <Text style={estilo.conteudo}> Assim como a chegada do computador impactou todo o mercado de trabalho com a troca da máquina de escrever, o armazenamento de dados em Cloud Computing começa a se consolidar como nova revolução empresarial.
</Text>
<Text style={estilo.conteudo}>
Cloud Computing, também chamado de nuvem – em português, é um recurso de armazenamento de conteúdo na web que já está presente na vida de muitos há um bom tempo, como nos sistemas de celulares, no GPS e softwares de serviço como Netflix e Whatsapp.
</Text>
<Text style={estilo.conteudo}>
A cada notícia que desponta na mídia, o cenário vai ficando mais claro: grandes empresas como a TV Globo, Ferrari e operadora de celular Tim já anunciaram a transição de todos os seus sistemas para a nuvem na internet. Recentemente, a gigante da computação Microsoft avisou que a próxima versão do Windows (Windows 365), será distribuída por streaming para qualquer dispositivo com uma tela, seja um computador, um tablet ou um celular. Ao contrário de todas as versões, não será instalado na máquina, ocupando memória. Agora, quem não fazia ideia do que era "cloud computing", começará a ter uma noção, afinal, a maioria dos computadores – seja doméstico ou de trabalho – operam com o sistema Windows.
</Text>
<Text style={estilo.conteudo}>
O que o pequeno empreendedor usava há alguns anos, seja um HD externo, pen-drive ou CD como armazenamento de dados, terá que lidar com seus dados "flutuando" num ambiente abstrato, a internet. O impacto da nuvem computacional será muito mais profundo do que imaginamos e temos que começar a discutir o assunto de maneira mais próxima do usuário.
</Text>
<Text style={estilo.conteudo}>
Há quase 10 anos oferecemos o serviço de nuvem para empresas, iniciamos como backup em nuvem e depois acrescentamos a Nota Fiscal eletrônica (NFe). Atualmente, temos cerca de 600 clientes no backup em nuvem e mais de 500 clientes usando a NFe. Pelo nosso sistema passam mais de 4 bilhões de reais de notas de faturamento por mês e 2 milhões de documentos fiscais trafegados na plataforma. Temos clientes de todo o Brasil, que inclusive nos confiam a completa gestão de dados, 100% de informação na nuvem, 24 horas por dia, nos segmentos são dos mais variados. Nos especializamos neste tipo de serviço para os mercados de varejo, atacadista e de distribuição.
</Text>
<Text style={estilo.conteudo}>
A nuvem hoje deixou de ser uma escolha, ela é uma necessidade, tanto financeira quanto tecnológica. A pergunta que o empresário tem que fazer não é "por que eu vou para a nuvem?", mas "quando e como vou migrar para a nuvem?". Assim como quem não se atualizou da máquina de escrever para o computador foi eliminado do mercado, vemos o movimento de mesma proporção acontecendo com a adoção da tecnologia de dados sendo transferidos para a nuvem.
</Text>
<Text style={estilo.conteudo}>
O modelo de cloud privada dedicada é o melhor para criar um atendimento exclusivo ao empresário, de acordo com o seu negócio, diferentemente de opções como o Google Drive, por exemplo. Com a nuvem privada, a empresa não compartilha seus dados com mais ninguém, desde a porta de entrada. Além disso, quem contrata este tipo de serviço fica em conformidade com a Lei Geral de Proteção de Dados (LGPD), é protegido com criptografia nativa tendo total segurança e recebe assistência técnica personalizada.
</Text>
<Text style={estilo.conteudo}>
A pandemia acelerou um processo de trabalho que era apenas tendência, o home office. E, agora, com o mundo vendo a possibilidade da volta à normalidade, muitas empresas estão optando pelo sistema híbrido de trabalho (parte presencial, parte remoto), já que viram uma redução de custos vantajosa com a não locação e manutenção de escritório físico. No último ano, com a economia brasileira em crise, crescemos em torno de 50% na demanda pelos serviços de cloud. Já estamos no futuro, não dá mais para esperar para se adaptar ao novo.
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