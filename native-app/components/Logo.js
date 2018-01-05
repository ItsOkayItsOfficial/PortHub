import React from 'react'
import { Image } from 'react-native'

export default Logo = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={require('../assets/images/porthub_logo.png')}
      style={props.style}
    />
  )
}
