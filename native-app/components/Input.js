import React from 'react'
import { View, TextInput, Image } from 'react-native'

export const Input = (props) => {
  const renderIcon = () => {
    return <Image source={props.icon} style={props.iconStyle} />
  }

  return (
    <View style={LoginStyles.inputWrapper}>
      {props.icon ? renderIcon() : null}

      <TextInput
        {...props}
        placeholder={props.label}
        secureTextEntry={true}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}
