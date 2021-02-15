
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function TextHeader2(props) {

    let header=props.header?<Text style={styles.text}>{props.header}</Text>:null;
    let source=props.imagesource?<Image style={styles.image} source={props.imagesource}/>:null;
  return (
    
        <View style={styles.main}>
            {header}
            {source}
        </View>
    
  );
}

const styles = StyleSheet.create({
    main:{
        marginTop:hp("3.2%"),
        marginBottom:hp("2%"),
        marginLeft:wp("4.4%")
        
    },
    text:{
        fontStyle:"normal",
        fontSize:RFPercentage(2.6),
        // lineHeight:22,
        // textAlign:"left",
        color:"#e53838",
        // letterSpacing:0,
        // top:"349px",
        // right:"15px", 
    },
    image:{
        height:hp("0.9%"),
        width:wp("44.4%"),
        
      },
});
