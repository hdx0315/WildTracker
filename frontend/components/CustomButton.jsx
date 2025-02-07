import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, className, txt_className}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={` bg-green-700  border-2 border-green-700 rounded-xl min-h-[62px] justify-center items-center px-10 ${className}`}
    >
        

        <Text className={` font-semibold tracking-widest text-2xl  ${txt_className}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton