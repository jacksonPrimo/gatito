import React from 'react'
import { Button, FlatList, View } from 'react-native'
import Item from './components/Item'
import { DefaultScreen } from '../../components/DefaultScreen'
import CustomButton from '../../components/CustomButton'
const listOfServices = [
  {
    id: 1,
    name: 'banho',
    price: 79.9,
    description: 'Realizamos a limpeza completa de seu pet'
  },
  {
    id: 2,
    name: 'vacina v4',
    price: 179.9,
    description: 'Himunize seu pet contra uma grande variedade de doenças'
  },
  {
    id: 3,
    name: 'tosagem',
    price: 59.9,
    description: 'Realizamos a tosagem de seu pet'
  },
  {
    id: 4,
    name: 'ração pedigre adulto 1kg',
    price: 10,
    description: 'O melhor para a alimentação de seu pet'
  }
]

export function Services({ navigation }){
  return(
    <DefaultScreen title="Produtos e Serviços">
      <View style={{display: 'flex', alignItems: 'flex-end', paddingTop: 10}}>
        <CustomButton value="Carrinho" action={() => navigation.navigate('Cart')}/>
      </View>
      <FlatList
        data={ listOfServices }
        renderItem = { ({ item })=> <Item {...item}/> }
        keyExtractor = { ({ id }) => String(id)}
      />
    </DefaultScreen>
  )
}
