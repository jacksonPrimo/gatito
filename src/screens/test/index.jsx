import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/counter";
export function Test(){
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <View>
      <Button title="adicionar" onPress={()=>{ dispatch(actions.plus(1)) }}/>
      <Text>{count}</Text>
    </View>
  )
}