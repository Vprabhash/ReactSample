import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import assets from '../assets';
import Fonts from '../assets/fonts/Fonts';

export default RecentScan = ({index}) => {
  return (
    <View style={[styles.Container, {paddingHorizontal: index == 0 ? 16 : 8}]}>
      <Image
        source={assets.exampleimg}
        style={styles.Image}
        resizeMode={'cover'}
      />
      <Text style={[styles.days, {left: index == 0 ? '15%' : '10%'}]}>
        {'2d ago'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  days: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#49A6FC',
    color: '#fff',
    fontSize: 12,
    fontFamily: Fonts.SpSemiBold,
    overflow: 'hidden',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  Image: {
    borderRadius: 100 / 8,
    width: 200,
    height: 200,
    overflow: 'hidden',
  },
});
