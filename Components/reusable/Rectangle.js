import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function Rectangle(props) {
  return (
    <View style={styles.main}>
      <Image  source={require("../images/capture.png")} style={styles.rectangle} />
      <Text style={styles.line}>{props.line}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
    main:{
        
        flexWrap:"wrap",
        alignItems:"center"
    },
 rectangle:{
     margin:10,

     padding:10,
     height:98,
     width:98,
},line:{
    fontStyle:"normal",
    fontSize:RFPercentage(1.8),
    color:"#778299",

}
});
