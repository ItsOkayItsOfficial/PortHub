import React from 'react'
import { Image } from 'react-native'

export default Logo = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={props.image}
      style={props.style}
    />
  )
}
