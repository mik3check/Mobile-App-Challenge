import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles.js';
import Map from './map.js'
import AlertList from './alertList.js';
// import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log('It loaded...per se');
  return (
    <SafeAreaView style={styles.grandContainer}>
      <StatusBar style='auto' />

      {/* Menu & Indicator Bar */}
      {/*-----------------------*/}
      <View style={styles.profileBar}>
        <Text style={{
          paddingLeft: '5%',
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold',
          flex: 5.5
        }}>Profile</Text>
        
        <Image source={require('./assets/menu.png')} style={{
          height: '100%',
          backgroundColor: '#ab413b',
          marginRight: '5%',
          flex: 1
        }} />
      </View>

      {/* Picture and Profile Info Section */}
      {/*-----------------------------------*/}
      <View style={styles.profileInfoContainer}>
        <View style={{ flex: .8, padding: '5%' }}><Image
          source={{ uri: 'https://picsum.photos/id/1025/500' }}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
            borderColor: 'white',
            borderRadius: 100,
          }}
        />
        </View>

        {/*First Text Column*/}
        {/*-----------------------*/}
        <View style={{
          flexDirection: 'column',
          flex: 1
        }}>
          <Text style={styles.largeFont}>Snug Pug</Text>

          <Text style={styles.smallFont}>Entity ID</Text>

          <Text style={styles.smallFont}>Device ID</Text>

          <Text style={styles.smallFont}>Serial #</Text>

          <Text style={styles.smallFont, { fontWeight: '500' }}>John Smith LAPD</Text>

          <Text style={styles.smallFont}>National Pretrial</Text>

        </View>

        {/* 2nd Text Column */}
        {/*-----------------------*/}
        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-end' }}>

          {/* Top Row */}
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <Image source={require('./assets/Check.png')}
              style={{
                height: 25,
                width: 25
              }} />
            <Text style={{ color: 'limegreen', fontSize: 22 }} >Active</Text>
          </View>

          <View style={{
            flex: 2,
            justifyContent: 'center',
            alignContent: 'center',
            padding: '2%',
            paddingLeft: '8%'
          }}>
            <Text style={styles.smallFont}>Device ID #2</Text>
            <Text style={styles.smallFont}>Serial #2</Text>
            <Text style={styles.smallFont, { fontWeight: '500' }}>Level II</Text>
            <Text style={styles.smallFont}>(888)503-6344</Text>
          </View>


        </View>
      </View>

      {/* Info Strip */}
      {/*-----------------------*/}
      <View style={styles.numberContainer}>
        {/* checkInCounter */}
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>3</Text>
          <Text style={styles.counterText}>Checkins</Text>
        </View>
        {/* locationCounter */}
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>212</Text>
          <Text style={styles.counterText}>Locations</Text>
        </View>
        {/* daysLeftCounter */}
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>497</Text>
          <Text style={styles.counterText}>Days Left</Text>
        </View>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Map></Map>
      </View>

      {/* Alert List */}
      <View style={styles.alertListContainer}>

        <View style={{
          // alignItems: 'center',
          flex: .4,
          borderWidth: 2,
          borderTopColor: 'white',
          borderLeftColor: 'white',
          borderRightColor: 'white',
          borderBottomColor: '#ab413b',
          width: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '1%'
        }}>
          <Text style={{
            fontSize: 18
          }}>Alerts</Text>
        </View>

        <View style={{
          // alignItems: 'center',
          flex: 2,
          width: '100%',
          paddingLeft: '2%',
          paddingRight: '2%',
          justifyContent: 'center'
        }}>
          <AlertList></AlertList>
        </View>

      </View>

      {/* Bottom Icon Menu */}
      <View style={styles.footMenuContainer}>

        <View style={{
          height: '100%',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
          }}>
          <Image source={require('./assets/cross.png')}
          style={styles.footerIcon}
          />
        </View>
        <View style={{
          height: '100%',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
          }}>
          <Image source={require('./assets/ping.png')}
          style={styles.footerIcon}
          />
        </View>
        <View style={{
          height: '100%',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
          }}>
          <Image source={require('./assets/dollar.png')}
          style={styles.footerIcon}
          />
        </View>
        <View style={{
          height: '100%',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
          }}>
          <Image source={require('./assets/search.png')}
          style={styles.footerIcon}
          />
        </View>
        <View style={{
          height: '100%',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
          }}>
          <Image source={require('./assets/question.png')}
          style={styles.footerIcon}
          />
        </View>
      </View>


      <View style={styles.footerContainer}>
        <View>
          <Image source={require('./assets/logo.jpg')}/>
        </View>
      </View>



    </SafeAreaView>















  );
}


