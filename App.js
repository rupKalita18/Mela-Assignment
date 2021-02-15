import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Banner from './Components/Banner'
import Header from './Components/Header'
import TextHeader from './Components/TextHeader';
import TextHeader2 from "./Components/reusable/TextHeader2"
import ContentContainer from "./Components/ContentContainer"
import Banner2 from "./Components/Banner2"
import RectangleContainer from './Components/RectangleContainer';
import Deals from './Components/Deals';
import BestDeals from './Components/BestDeals';

export default class App extends React.Component{
  render(){
  return (
    <ScrollView style={styles.container}>
      
      <Header />
      <Banner />
      <TextHeader imagesource={require('./Components/images/fill_363.png')} header={"Shop By Pattern"} />
      <ContentContainer />
      <Banner2 />
      <TextHeader2 imagesource={require("./Components/images/fill_363.png")} header={"Top Brands"} />
      <RectangleContainer />
      <TextHeader2 header={"KnockOut Deals"} imagesource={require("./Components/images/fill_363.png")}/>
      <Deals />
      <TextHeader2 header={"Beauty Bonaza"} imagesource={require("./Components/images/fill_363.png")} />
      <BestDeals />
      <StatusBar style="auto" />
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
