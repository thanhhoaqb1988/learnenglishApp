import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

 class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enn: '',
            vnn: ''
        }
        this.onAdd=this.onAdd.bind(this)
    }
    onAdd(){
        const {enn, vnn} = this.state;
        this.props.dispatch({
            type:'ADD_WORD',
            enn,
            vnn,
        })
        this.props.dispatch({
            type:'TOGLE_ISADDING',
        })
     }
    render() {
        return (
            <View style={{ flex: 3, alignItems: 'center' }}>
                <TextInput style={style.textInput}
                    value={this.state.enn}
                    onChangeText={(text) => this.setState({ enn: text })}
                    placeholder='Enlish Word'
                    placeholderTextColor='white'>
                </TextInput>
                <TextInput style={style.textInput}
                    value={this.state.vnn}
                    onChangeText={(text) => this.setState({ vnn: text })}
                    placeholder='Viet Nam'
                    placeholderTextColor='white'
                    >
                </TextInput>
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(Form);
const style = StyleSheet.create({
    textInput: {
        width: 300,
        height: 35,
        borderColor: 'gray', borderWidth: 1,
        margin: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 5,
        backgroundColor:'chartreuse'
    
    }
})