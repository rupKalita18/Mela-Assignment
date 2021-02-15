import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
    
     <Text style={styles.text}>The Kurti Store</Text>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#4c102b',
    alignItems:"center",
    justifyContent: 'center',
    minHeight:hp('20%'),
    width:wp('100%'),

  },
  text:{

    color:"#fff",
    fontStyle:"normal",
    
    fontSize:RFPercentage(3),


  }
});
