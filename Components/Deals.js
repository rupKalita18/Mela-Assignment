import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



import Dealimages from './reusable/Dealimages';


export default class Deals extends React.Component{
  render(){
  return (
    <View style={styles.container}>
        
        <View style={styles.imagecontainer}>
            <Dealimages start="Under" middle="Rs 499" end="off" />
            <Dealimages start="Under" middle="Rs 399" end="off" />
            <Dealimages start="Under" middle="Rs 299" end="off" />
        </View>


      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({

    container:{
        
        padding:3,
        margin:hp("1.2%")

    },
    imagecontainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
    }
    
    
});
