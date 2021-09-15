import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style from './style'
import CustomButton from '../../../../components/CustomButton'

import { useDispatch } from 'react-redux';
import { actions } from '../../../../store/cart';

export default function Item({name, price, description, quantity, index}){
  
  const dispatch = useDispatch();
  
  const [expand, setExpand] = useState(false)
  const inverseExpend = () => {
    setExpand(!expand)
  }
  return (
    <View style={style.item}>
      <TouchableOpacity onPress={inverseExpend}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
      </TouchableOpacity> 
      {
        expand && 
        <View style={style.ocult}>
          <View>
            <Text style={style.textPurple}>Valor: {
              Intl.NumberFormat('pt-Br', {
                style: 'currency', currency: 'BRL'
              }).format(price)
            }</Text>
            <Text style={style.textPurple}>Quantidade: {quantity}</Text>
            <Text style={style.textPurple}>Total: {
              Intl.NumberFormat('pt-Br', {
                style: 'currency', currency: 'BRL'
              }).format(quantity * price)
            }</Text>
          </View>
          <View>
            <CustomButton value="remover" action={()=>{ dispatch(actions.remove(index)) }}/>
          </View>
        </View>
      }
    </View>
  ) 
}