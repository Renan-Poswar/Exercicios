import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './Componentes/Simples'
// import Padrao from './Estilo/Padrao'
import ParImpar from './Componentes/ParImpar'
import { Inverter, MegaSena } from './Componentes/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Bora Bora!!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={10} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Énois que voa!!' />
    }
}, { drawerWidth: 300})