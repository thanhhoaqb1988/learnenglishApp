import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    memorizedWord(){
        this.props.dispatch({
            type: 'MEMORIZED',
            id:this.props.exportword.id
        })
    }
    showword(){
        this.props.dispatch({
            type: 'SHOW',
            id:this.props.exportword.id
        })
    }
    
    render() {
        const {en,vn,memorized,isshow}= this.props.exportword;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtontext = memorized ? 'forget':'memorized';
        const meaning = isshow ? vn : '----'
        return (

            <View style={style.FLstyle}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text >{meaning}</Text>
                <View style={style.controller}>
                <TouchableOpacity style={{backgroundColor:'white',padding:5}}
                onPress= {this.memorizedWord.bind(this) }>
                    <Text>{memorizedButtontext}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'white',  padding:5}} 
                onPress= {this.showword.bind(this) }>
                    <Text>show</Text>
                </TouchableOpacity>
                </View>
               
            </View>
        )
    }
};

export default connect()(Word)
const style = StyleSheet.create({
    FLstyle: {
        backgroundColor: 'tomato',
        justifyContent: 'center',
        padding: 10,
        margin: 10
    },
    controller:{
        flexDirection:'row',
        justifyContent:'space-around',
       }
})