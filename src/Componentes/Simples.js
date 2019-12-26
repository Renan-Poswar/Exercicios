import React from 'react'
import { Text } from 'react-native'
import Padrao from '../Estilo/Padrao'

// export default function(props){
// return <Text>{props.texto}Isso vai mudar sua vida!!</Text>
// }

export default props => [
    <Text key={1}>{props.texto}Isso vai mudar sua vida!!</Text>,
    <Text key={2}>{props.texto}Lute todo dia!!</Text>
]