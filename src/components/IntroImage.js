import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Fonts from '../assets/fonts/Fonts';

export default IntroImage = ({text, desc, image}) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={image} style={styles.sliderImage} />
      <Text style={styles.instrTitle}>{text}</Text>
      <Text style={styles.instrDes}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instrTitle: {
    color: '#000',
    fontSize: 18,
    fontFamily: Fonts.SpSemiBold,
    textAlign: 'center',
  },
  instrDes: {
    color: '#000',
    marginTop: 16,
    fontSize: 14,
    fontFamily: Fonts.SpSemiBold,
    textAlign: 'center',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  sliderImage: {
    marginTop: 20,
    width: '90%',
    height: '60%',
    resizeMode: 'contain',
  },
});
