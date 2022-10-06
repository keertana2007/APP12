import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style = {styles.style1}>
                <Text style = {styles.text} >WELCOME ! </Text>
                

                <Text style = {styles.text1}> This app was created with the idea of helping the people with special needs. <br/> It aims to enlighten people about Intellectual disabilities and empower them to do the best they can for their upliftment  </Text>

                <Text style = {styles.text1}> The app is a handy tool for people as it allows them to get in touch with specialists and helps plans routines.<br/> This app is also a platform for social work as it has the option of vounteering and donations. </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  style1: {
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "#C8A2C8"
                },
  text: {
    color: "#ffff",
    fontSize: 30,
    padding:25,
    textAlign:'centre'
  },
   text1 : {
      fontFamily:"courier",
      color:"#ffff",
      padding:25,
      fontSize:17


 }
});