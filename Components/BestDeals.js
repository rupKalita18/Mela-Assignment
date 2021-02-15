import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,ImageBackground,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";




export default class BestDeals extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      
        <View style={styles.imagecontainer}>
            <View style={styles.fit}>
            <Image source={require("./images/capture1.png")} style={styles.image} />
            <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
            <Text style={styles.big}>{"Warli Hand-Painted LivingRoom and Home..."}</Text>
            </View>
            <View style={styles.fit}>
            <Image source={require("./images/capture4.png")} style={styles.image} />
            <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
            <Text style={styles.big}>{"Decorative Designer Table Lamp"}</Text>
            </View>
        </View>

        <View style={styles.imagecontainer}>
            <View style={styles.fit}>
            <Image source={require("./images/capture2.png")} style={styles.image} />
            <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
            <Text style={styles.big}>{"LuvLap Foldable Wooden Chair"}</Text>
            </View>
            <View style={styles.fit}>
            <Image source={require("./images/capture3.png")} style={styles.image} />
            <Text style={styles.big}>{"\u20A8"}{399} <Text style={styles.small}>{"\u20A8"}{"299"}</Text> </Text>
            <Text style={styles.big}>{"Furniture Cafe U Wall Shelf/Racks and Shelves"}</Text>
            </View>
        </View>
        

      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
    imagecontainer:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:20,
        marginBottom:85,
    },
    fit:{
        height:hp("23%"),
        width:wp("37.61%"),
       
    },
    container:{
        
        marginTop:hp("2.4%"),
        marginBottom:hp("4.2%")
    },
    image:{
        height:hp("22.386%"),
        width:wp("37.61%"),

    },
    big:{
        fontSize:RFPercentage(2),
        color:"#040e35"

    },
    small:{
        fontSize:RFPercentage(1.2),
        color:"#b5c0dc"

    }
    
});
