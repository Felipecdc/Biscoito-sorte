import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App(){
  const [img, setImg] = useState(require('./source/biscoito.png'));
  const [textFrase, setTextFrase] = useState('Olá, teste sua sorte');

  var frases = [
    "A vida trará coisas boas se tiver paciência",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
    "Não compense na ira o que lhe falta na razão",
    "Defeitos e virtudes são apenas dois lados da mesma moeda",
    "A maior de todas as torres começa no solo",
    "Não há que ser forte. Há que ser flexível",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida",
    "A juventude não é uma época da vida, é um estado de espírito"
  ];

  function quebrar(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require('./source/biscoitoAberto.png'));
  }

  function concertar(){
    setTextFrase('Olá, teste sua sorte');
    setImg(require('./source/biscoito.png'));
  }

  return(
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>
      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebrar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, {marginTop: 20, borderColor: "#121212"}]} onPress={concertar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: "#121212"}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 20,
  },
  btnArea:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22",
  }
});