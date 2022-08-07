import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import assets from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../assets/fonts/Fonts';
import RecentScan from '../components/RecentScan';
import BottomNav from '../components/BottomNav';
const Home = () => {
  const scanlist = [
    {name: 'Single Scan', image: assets.ScanSingle},
    {name: 'Batch Scan', image: assets.ScanBatch},
    {name: 'Scan to Text', image: assets.ScanOCR},
  ];

  const search = () => {
    return (
      <View key={1}>
        <View style={styles.searchview}>
          <Image
            source={assets.Search}
            style={styles.searchicon}
            resizeMode={'contain'}
          />
          <TextInput
            style={{flex: 0.85, color: '#000'}}
            placeholder={'Search'}
            placeholderTextColor={'#000'}
          />
        </View>
      </View>
    );
  };

  const scans = (text, image) => {
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Image source={image} style={styles.iconsize} resizeMode={'contain'} />
        <Text style={styles.scanstext}>{text}</Text>
      </View>
    );
  };

  const recentlist = (index) => {
    return (
      <View style={{marginBottom:index==3?80:0}}>
        <Text style={styles.recentstyle}>Recent Scans</Text>
        <FlatList
          data={Array(20).fill()}
          horizontal
          renderItem={({item, index}) => {
            return <RecentScan index={index} />;
          }}
        />
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#DEDDDD', '#fff']}
      locations={[0.1, 1]}
      style={styles.linearstyle}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={styles.greetingview} key={1}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.eveningtext}>Good Evening</Text>
            <Text style={styles.welecomtext}>Welcome back</Text>
          </View>
          <Image
            source={assets.Premium}
            style={styles.icons}
            resizeMode={'contain'}
          />
        </View>
        <View key={2}>
        <Image
          source={assets.PremiumBanner}
          style={styles.banner}
          resizeMode={'contain'}
         />
        {search()}
        </View>
        <View style={styles.batchview}  key={3}>
          {scanlist.map(e => {
            return scans(e.name, e.image);
          })}
        </View>
        <View  key={4}>
        {Array(4).fill().map((e,i)=>{
            return recentlist(i);
        })}
        </View>
      </ScrollView>
      <BottomNav />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  batchview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 16,
  },
  welecomtext: {
    color: '#9B9B9B',
    fontFamily: Fonts.SpBold,
    fontSize: 18,
    lineHeight: 30,
  },
  scanstext: {color: '#000', fontFamily: Fonts.SpBold, fontSize: 12},
  eveningtext: {
    color: '#000',
    fontFamily: Fonts.SpBold,
    fontSize: 34,
    lineHeight: 36,
  },
  recentstyle: {
    color: '#000',
    fontFamily: Fonts.SpBold,
    fontSize: 20,
    marginStart: 16,
  },
  greetingview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  searchview: {
    backgroundColor: '#fff',
    height: 50,
    margin: 16,
    flexDirection: 'row',
    borderRadius: 100,
  },
  searchicon: {width: 16, height: 16, alignSelf: 'center', flex: 0.15},
  linearstyle: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',
  },
  icons: {width: 34, height: 34},
  banner: {width: '100%', height: Dimensions.get('window').height / 9},
  btnstyle: {
    position: 'absolute',
    right: 16,
    bottom: '7%',
    borderRadius: 100,
    width: 55,
    height: 55,
    backgroundColor: '#49A6FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsize: {width: 35, height: 35},
});

export default Home;
