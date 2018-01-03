import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Image } from 'react-native'
import { LoginStyles } from '../constants'

const Input = (props) => {
  const renderIcon = () => {
    return <Image source={props.icon} style={props.iconStyle} />
  }

  return (
    <View style={LoginStyles.inputWrapper}>
      {props.icon ? renderIcon() : null}

      <TextInput
        {...props}
        style={LoginStyles.input}
        placeholder={props.label}
        secureTextEntry={true}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

Input.propTypes = {
  icon: PropTypes.any,
  iconStyle: PropTypes.any,
  label: PropTypes.string,
  wrapperStyle: PropTypes.any
}

export default Input
