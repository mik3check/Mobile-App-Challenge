import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View } from 'react-native';

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})

class Map extends Component {
  render() {
    return (
      <View style={{ height: '95%' }}>
        <MapView
          // zoomEnabled={false}
          style={styles.map}
          initialRegion={{
            latitude: 30.225411,
            longitude: -93.210466,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

export default Map;