import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View style = {styles.style1}>
                
                <Text> YOUR PROFILE</Text>
                <Text style = {styles.text1}> You can volunteer yourself at special schools or clinics as a part time help.</Text>
          
         
          <View style = {styles.list} >
          <ol>
  <li> Name :- </li>
  <li> Age :- </li>
  <li>  Phone number:- </li>
  <li> Address :-</li>
  <li> Date of registration:-  </li>

</ol>  </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  style1: { 
                    flex: 1,
                    alignItems: "center",    
                    backgroundColor: "#C8A2C8",
                    padding:20
                },
 
text1:{
           alignItems:"center",
            fontStyle: "verdana",
            color:"purple",
            fontSize:15,
            padding:20

},
list:{
          fontSize:15,
         paddingRight:200,
         alignItems:"left"

}

 });