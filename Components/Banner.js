import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default class Banner extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require("./images/group_3978.jpg")} style={styles.image}>
        <View style={styles.textcontainer}>
          <Text style={styles.text1}>Upto</Text>
          <Text style={styles.text2}>25% off</Text>
        </View>

      </ImageBackground>
      

      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        height:hp("20%"),

    },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"flex-end",
    height:280,
    width:wp("100%"),
  },
  textcontainer:{
      marginRight:wp("10%"),
      marginTop:hp("9.6%")
  },
  text1:{
      fontStyle:"italic",
      fontWeight:"normal",
      color:"#fff",
      fontSize:RFPercentage(5),

  },
  text2:{
    fontStyle:"italic",
    fontWeight:"bold",
    color:"#fff",
    fontSize:RFPercentage(5),
  }
});
