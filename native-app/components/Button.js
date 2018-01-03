import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {

  getContent = () => {
    (props.children) ? props.children : <Text style={props.styles.label}>{props.label}</Text>
  }

  return (
    <TouchableOpacity onPress={onPress} style={props.style}>
      getContent()
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
