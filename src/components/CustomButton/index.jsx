import React from "react";
import { Text, TouchableOpacity } from "react-native";
import style_function from './style'

export default function CustomButton({small = false, inverted = false, value, action}){
  const style = style_function(small, inverted)
  return(
    <TouchableOpacity onPress={action} style={style.button}>
      <Text style={style.value}>{value}</Text>
    </TouchableOpacity>
  )
}