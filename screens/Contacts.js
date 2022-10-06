import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';

export default class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email_id: "",
      address: "",
      contact_number:"",
      doc_id:""
    };
  }


    handleTransaction = () => {
    var { bikeId } = this.state;
    db.collection("Contacts")
      .doc(bikeId)
      .get()
      .then(doc => {
        var bike = doc.data();
        
      });
  };
    

 render() {
        return (
            <View
                style={styles.style1} >
                <Text>CONTACTS</Text>
                <TextInput
              placeholder={"Bicycle Id"}
              placeholderTextColor={"#FFFFFF"}
              value={bikeId}
            />
            </View>
        )
    }

    async Details() {
    if (
      this.state.address &&
      this.state.email_id &&
      this.state.contact_number &&
      this.state.name &&
      this.state.doc_id
    ) {
      let detail = {
        
        name: this.state.name,
        contact_number: this.state.contact_number,
        email_id: this.state.email_id,
        address: this.state.address,
        id: this.state.doc_id
      
      };
}}}


const styles = StyleSheet.create({
  style1: { 
                    flex: 1,
                    alignItems: "center",    
                    backgroundColor: "#C8A2C8",
                    padding:20,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }
})