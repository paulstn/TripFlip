import React from 'react';
import { Text, View, Image } from 'react-native';
import { COLORS } from '../utils/constants';

import { styles } from './styles';

export default function Choice({ type }) {
  const color = COLORS[type];

  return (
    <Image 
        source={{uri: `./assets/${type}.png`}}
        style={{ width: 33, height: 34 }}
      />
    // <View style={[styles.container, { borderColor: color }]}>
    //   <Text style={[styles.text, { color }]}>{type}</Text>
    // </View>
  );
}
