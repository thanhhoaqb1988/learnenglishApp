import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

 class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text></Text>
                <Text>My Word</Text>
                <TouchableOpacity onPress={()=>this.props.dispatch({type:'TOGLE_ISADDING'})}>
                    <Text>+</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const style = StyleSheet.create({
    header: {
        flex: 1, backgroundColor: 'blue',
        alignItems: 'center', justifyContent: 'space-between',
        flexDirection: 'row'

    }
})
export default connect()(Header);