import React from 'react';
import {Image, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import assets from '../assets';
import Fonts from '../assets/fonts/Fonts';

export default BottomNav = ({text, desc, image}) => {
    const plusbtn = () => {
        return (
          <TouchableOpacity
          activeOpacity={1}
            style={styles.btnstyle}>
            <Image
              source={assets.Plus}
              style={styles.iconsize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        );
      };

  return (
    <View style={styles.container}>
      
      <View style={{backgroundColor: '#F3F3F3', height: 55,justifyContent:"space-between",flexDirection:"row",paddingHorizontal:32,alignItems:"center"}}>
        <Image source={assets.Library} style={styles.iconsize} resizeMode={"contain"} />
        <Image source={assets.Settings} style={styles.iconsize} resizeMode={"contain"} />
      </View>
      {plusbtn()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 80,
    backgroundColor: '#0000',
    justifyContent: 'flex-end',
  },
  btnstyle: {
    position: 'absolute',
    borderRadius: 100,
    width: 58,
    height: 58,
    backgroundColor: '#49A6FC',
    alignSelf:"center",
    bottom:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsize: {width: 30, height: 30},
});
