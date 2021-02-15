import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import Rectangle from './reusable/Rectangle';


export default class RectangleContainer extends React.Component{
  render(){
  return (
    <View style={styles.container}>
        <View style={styles.imagecontainer}>
            <Rectangle line={"7 seasons"}/>
            <Rectangle line={"Aju Fashion"}/>
            <Rectangle line={"villa Fashion"}/>
        </View>
        <View style={styles.imagecontainer}>
            <Rectangle line={"Meet fashion"}/>
            <Rectangle line={"Rad Fashion"}/>
            <Rectangle line={"Man Fashion"}/>
        </View>
        <View style={styles.imagecontainer}>
            <Rectangle line={"LifeStyle"}/>
            <Rectangle line={"ADCollection"}/>
            <Rectangle line={"Mela"}/>
        </View>



      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({

    container:{
        

    },
    imagecontainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
    }
    
    
});
