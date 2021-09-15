import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../../../components/CustomButton'
import IntegerField from '../../../../components/IntegerField'
import style from './style'

import { useDispatch } from 'react-redux'
import { actions } from '../../../../store/cart'

export default function Item({id, name, price, description}){
  
  const dispatch = useDispatch();

  const [ quantity, setQuantity ] = useState(1)
  const [ total, setTotal ] = useState(price)
  const [ expand, setExpand ] = useState(false)

  const updateTotalQuantity = newQuantity =>{
    setQuantity(newQuantity)
    calculateTotal(newQuantity)
  }
  const calculateTotal = quantity =>{
    setTotal(quantity * price)
  }
  const inverseExpend = () => {
    setExpand(!expand)
    updateTotalQuantity(1)
  }
  const addItemInCart = () => {
    if(quantity <= 0) {
      Alert.alert("Quantidade Inválida")
    } else {
      Alert.alert("Item adicionado com sucesso")
      dispatch(actions.add({id, name, price, description, quantity}))
    }
  }
  return (
    <View style={style.item}>
      <TouchableOpacity onPress={inverseExpend}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.price}>{
          Intl.NumberFormat('pt-Br', {
            style: 'currency', currency: 'BRL'
          }).format(price)
        }</Text>
      </TouchableOpacity>
      {
        expand && 
        <View style={style.cart}>
          <CustomButton value="adicionar" action={addItemInCart}/>
          <View style={style.cart_info}>
            <View style={style.cart_info_quantity}>
              <Text>Quantidade: </Text>
              <IntegerField value={quantity} action={updateTotalQuantity}/>
            </View>
            <Text>total: {
              Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(total)
            }</Text>
          </View>
        </View>
      }
    </View>
  ) 
}