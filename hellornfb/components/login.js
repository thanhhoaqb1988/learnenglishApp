import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button,TouchableHighlight, Alert } from 'react-native';
//import firebaseapp from './appconfig';
//import firebase from 'firebase';
//import * as firebase from "firebase/app";
//import "firebase/auth";
import firebase from 'react-native-firebase';
//import firebase from 'react-native-firebase-auth';
//import firebase from 'react-native-firebase/auth'
export default class Loginscreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            user:null
        }
    };
    // componentDidMount(){
    //     var config = {
    //         apiKey: "AIzaSyD_23UErWGrQS_Eyf4-QkWjdVbcmHm2nF4",
    //         authDomain: "hellornfb-9e006.firebaseapp.com",
    //         databaseURL: "https://hellornfb-9e006.firebaseio.com",
    //         projectId: "hellornfb-9e006",
    //         storageBucket: "hellornfb-9e006.appspot.com",
    //         messagingSenderId: "275535105592"
    //       };
    //       firebase.initializeApp(config);
    // }
        UserLogin=() =>{
            firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
                .then((logInUser) => {
                   this.setState({user: logInUser})
                })
                .catch((error) =>{
                   // console.log('register fall with error: ${error}')
                });
        };
    
   
    render() {
        return (
            <View style={style.Loginstyle}>
                <TextInput
                    style={style.TextInputStyle}
                    keyboardType='default'
                    onChangeText={(mail) => this.setState({ mail })}
                    value={this.state.mail}
                />
                <TextInput
                    style={style.TextInputStyle}
                    keyboardType='default'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <View style={{ flexDirection: 'row', margin: 2 }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <TouchableHighlight underlayColor='red'
                            onPress={this.UserLogin}>
                            <View style={{ backgroundColor: 'green' }}>
                                <Text>TouchableHighlight</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    <Button
                        style={{ backgroundColor: 'yellow', padding: 5, margin: 2 }}
                        title='Regester'
                        onPrees={() => { this.UserRegester() }}>
                    </Button>
                </View>
            </View>

        );
    }
}
const style = StyleSheet.create({
    Loginstyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInputStyle: {
        height: 40, width: 300, borderColor: 'gray', borderWidth: 1,
        margin: 2,
    }
})