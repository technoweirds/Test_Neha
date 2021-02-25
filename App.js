import React, { Component } from 'react';

import { StyleSheet, View, Alert, Button } from 'react-native';
 
export default class MyProject extends Component {

     
  ShowCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var s = new Date().getSeconds();




      Alert.alert("Date:" +  date + '-' + month + '-' + year + " Time :" +h+":"+m+":"+s );

  render() {

    return (
   
      <View style={styles.MainContainer}>

          <Button title="Show Current Date" onPress={this.ShowCurrentDate} />
       
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10

  }

});