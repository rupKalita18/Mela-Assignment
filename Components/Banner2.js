import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default class Banner extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require("./images/group_3974.png")} style={styles.image}>
        <View style={styles.textcontainer}>
            <Text style={styles.text}>Trending Products</Text>
            <View style={styles.button}>
                <Text >Shop Now</Text>
            </View>
          <Text style={styles.text1}>Upto <Text style={{color:"#fffd99"}}>60%</Text> off</Text>
        </View>

      </ImageBackground>
      

      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:10,
       

    },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",
    height:hp("26.906%"),
    width:wp("100%"),
  },
  textcontainer:{
      marginLeft:wp("3%"),
    //   marginTop:hp("9.6%")
  },
  text1:{
      fontStyle:"italic",
      opacity:0.7,
      fontWeight:"normal",
      color:"#fff",
      fontSize:RFPercentage(3.45),

  },
  text:{
      marginLeft:18,
    fontStyle:"normal",
    fontWeight:"bold",
    color:"#fff",
    fontSize:RFPercentage(1.72),
  },
  button:{
      height:hp("2.5%"),
      width:wp("24.1%"),
      borderRadius:8,
      alignItems:"center",
      marginTop:5,
      marginLeft:wp("7%"),
      backgroundColor:"#ff902b",
  }
});
