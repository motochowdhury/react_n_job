import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedCard, handleCardPress}) => {
  return (
    <TouchableOpacity
    style={styles.container(selectedCard, item)}
    onPress={()=> handleCardPress(item)}
    >
      <TouchableOpacity
      style={styles.logoContainer(selectedCard, item)}
      >
        <Image 
        source={{uri: item.employer_logo}}
        resizeMode="contain"
        style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
      style={styles.companyName}
      numberOfLines={1}
      >
        {item.employer_name}
      </Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard