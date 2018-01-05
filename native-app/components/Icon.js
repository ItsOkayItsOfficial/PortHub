import React from 'react'
import { Image } from 'react-native'

export default Icon = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={require('../assets/images/porthub_icon.png')}
      style={props.style}
    />
  )
}
