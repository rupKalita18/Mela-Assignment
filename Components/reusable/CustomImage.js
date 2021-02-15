import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';

export default function CustomImage(props) {
  return (
    
        <Image source={props.imagesource} style={styles.banner} />
    
  );
}

const styles = StyleSheet.create({
  banner: {
    width:161,
    height:152,
    alignItems:"center",
    justifyContent:"center"
   
  },
});
