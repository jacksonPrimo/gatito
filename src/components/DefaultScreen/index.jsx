import React from 'react'
import { Text, KeyboardAvoidingView, SafeAreaView, StatusBar, Platform } from 'react-native'
import style from './style'
export function DefaultScreen({ children, title }){
  return (
    <SafeAreaView style={style.list}>
      <StatusBar/>
      {/* <Text style={style.title_page}>{title}: </Text> */}
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        // style={globalStyle.preencher}
      >
        { children } 
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}