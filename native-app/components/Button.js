import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={props.textStyle}>
        Login In
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any,
  text: PropTypes.string,
  textStyle: PropTypes.any
}

export default Button
