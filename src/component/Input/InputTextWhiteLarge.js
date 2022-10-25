import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextWhiteLarge = ({title, secureText, placeholder, onChangeText}) => {
  return (
    <View style={{width: '100%',}}>
      <Text style={{color: '#00162A', fontWeight: 'bold'}}>{title}</Text>
      <TextInput multiline={true} style={{backgroundColor: 'white',  marginBottom: 8, marginTop: 10,  height: 150, textAlignVertical: 'top'}}
      secureTextEntry={secureText} placeholder={placeholder}  onChangeText={onChangeText} />
    </View>
  )
}

export default InputTextWhiteLarge

const styles = StyleSheet.create({})