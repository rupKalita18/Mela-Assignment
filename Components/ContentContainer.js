import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import CustomImage from "./reusable/CustomImage"


export default class Banner extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      
        <View style={styles.imagecontainer}>

            <View style={styles.col}>
                <CustomImage imagesource={require("./images/aline.png")} />
                <Text style={styles.text}>A-line</Text>
            </View>

            <View style={styles.col}>
                <CustomImage imagesource={require("./images/rectangle_36.png")} />
                <Text style={styles.text}>Anarkali</Text>
            </View>

        </View>
        <View style={styles.imagecontainer}>

                <View style={styles.col}>
                    <CustomImage imagesource={require("./images/angarakha.png")} />
                    <Text style={styles.text}>Angarakha</Text>
                </View>

                <View style={styles.col}>
                    <CustomImage imagesource={require("./images/longstraight.png")} />
                    <Text style={styles.text}>Long Straight</Text>
                </View>

        </View>
        <View style={styles.imagecontainer}>

            <View style={styles.col}>
                <CustomImage imagesource={require("./images/overlay.png")} />
                <Text style={styles.text}>Over-Lay</Text>
            </View>

            <View style={styles.col}>
                <CustomImage imagesource={require("./images/flare.png")} />
                <Text style={styles.text}>Flare</Text>
            </View>

        </View>

      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({

    container:{
        

    },
    col:{
        
        alignItems:"center",
        marginTop:20,
        marginBottom:5,

    },
    imagecontainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",

    },
    text:{
        fontStyle:"normal",
        color:"#e53838",
        fontSize:RFPercentage(1.97)
    }
    
});
