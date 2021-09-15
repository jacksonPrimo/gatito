import React from 'react'
import { TextInput } from 'react-native'

const IntegerField = ({value, action}) => {
  const computedValue = String(value)
  const updateValue = newValue => {
    const isInteger = newValue.match(/^[0-9]*$/)
    if(isInteger){
      const removedZeroInLeft = newValue.replace(/^(0)(.+)/, '$2') 
      action(removedZeroInLeft)
    }
  }
  return (
    <TextInput 
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(currentValue)=>{updateValue(currentValue)}}
      value={computedValue} 
      style={{borderBottomWidth: 1}}
    />
  )
}
export default IntegerField