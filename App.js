import React, { Component } from 'react'
import  { View, Text, StyleSheet } from 'react-native'
import Simples from './Componentes/Simples'
import Padrao from './Estilo/Padrao'
import ParImpar from './Componentes/ParImpar'
import { Inverter, MegaSena } from './Componentes/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text  style={Padrao.ex}>Aplicativo Ágil</Text>
        <Simples texto='Acredite! '/>
        <ParImpar numero={17}/>
        <Inverter texto='Ficar rico!' />
        <MegaSena numeros={6} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fon: {
    fontSize: 34
  }
})