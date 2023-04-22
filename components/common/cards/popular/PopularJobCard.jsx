import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { checkImageURL } from '../../../../utils';
import styles from './popularjobcard.style';

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
        source={{uri: checkImageURL(item.employer_logo) ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
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

      <View style={styles.infoContainer}>
        <Text 
        style={styles.jobName(selectedCard, item)}
        numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text
        style={styles.location}
        >
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard