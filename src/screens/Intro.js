import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import {Layout} from '@ui-kitten/components';
import IntroImage from '../components/IntroImage';
import assets from '../assets';

const Intro = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let pageIndex = 0;
  const Introinfo = [
    {
      title: 'Scan anything in HD,\n wherever you are...',
      des: 'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
      images: assets.Introfirst,
    },
    {
      title: 'Navigate work documents \nlike a Pro',
      des: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.',
      images: assets.Introsecond,
    },
    {
      title: 'Less time scanning homework\n = more time for fun',
      des: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
      images: assets.Introthird,
    },
    {
      title: 'Covert Pictures to Text with our\n next generation offline OCR',
      des: 'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
      images: assets.Introfourth,
    },
  ];

  const btn = () => {
    // i can use navigation.navigate but since i have to replace navigation with Home
    // so that if some one try to back it should not go back to intro screen again
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.replace('Home');
        }}
        style={styles.btnstyle}>
        <Image
          source={assets.Forward}
          style={styles.iconsize}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Layout style={styles.layoutstyle}>
      <PagerView
        style={{flex: 1}}
        initialPage={0}
        onPageScroll={({nativeEvent: {position}}) => {
          pageIndex = position;
        }}
        onPageScrollStateChanged={({nativeEvent: {pageScrollState}}) => {
          if (pageScrollState == 'idle' && pageIndex != activeIndex) {
            setActiveIndex(pageIndex);
          }
        }}>
        {Introinfo.map(e => {
          return (
            <View>
              <IntroImage text={e.title} desc={e.des} image={e.images} />
            </View>
          );
        })}
      </PagerView>

      <View style={styles.indicator}>
        {Array(4)
          .fill()
          .map((item, index) => (
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                key={index}
                style={index == activeIndex ? styles.active : styles.deactive}
              />
            </View>
          ))}
      </View>

      {activeIndex == 3 && btn()}
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutstyle: {flex: 1, backgroundColor: '#FFFFFF'},
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    marginBottom: 80,
    width: '40%',
    alignSelf: 'center',
  },
  iconsize: {width: 30, height: 30},
  active: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: '#49A6FC',
  },
  deactive: {
    width: 9,
    height: 9,
    borderRadius: 100,
    backgroundColor: '#9B9B9B',
  },
  btnstyle: {
    position: 'absolute',
    right: 16,
    bottom: '7.5%',
    borderRadius: 100,
    width: 58,
    height: 58,
    backgroundColor: '#49A6FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
