import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import grtTemp from '../api/grtTemp'
import getTemp from '../api/grtTemp';
 export default class Main extends Component {
     constructor(Props){
         super(Props)
         this.state={
             cityName:''
         }
     }
     getTempbyCityname(){
         getTemp(this.state.cityName)
         .then(temp =>console.log)
         .catch(err => console.log(err))
     }
  render() {
    return (
     <View style ={styles.morther}>
         <Text style={styles.textStyle}>NHiet do ha noi hien tai la {this.props.temp}</Text>
     <TextInput style={styles.textInput}
     value={this.state.cityName}
     onChangeText={text=>this.setState({cityName:text})}>
     </TextInput>
     <TouchableOpacity style={styles.buttonStyle}
     onPress = {this.getTempbyCityname.bind(this)}>
         <Text>Lay nhiet do</Text>
     </TouchableOpacity>
     </View>
      );
  }
}
const styles=StyleSheet.create({
    morther:{
        backgroundColor:'white', 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    }, 
    textStyle:{
        margin:20,

    },
    textInput:{
        height:40,
        width:300,
        backgroundColor: 'black',
        color:'white',
        paddingHorizontal:10
    },
    buttonStyle:{
        backgroundColor:'lightblue',
        marginTop:10,
        alignItems:'center',
        width:100
    }
})
