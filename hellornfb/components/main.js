import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Filter from './filter';
import Word from './word';
import Header from './header'
import Form from './form'

class Main extends Component {
    getArrayList() {
        const { myWord, myfilter } = this.props;
        if (myfilter === 'MEMMORIZED') return myWord.filter(e => e.memorized);
        if (myfilter === 'NEED PRACTICE') return myWord.filter(e => !e.memorized);
        return myWord;
    }

    render() {
        return (
            <View style={{ flex: 1,alignSelf:'stretch' }}>
                <Header></Header>
                {this.props.isAdding ? <Form></Form> :null}
                <View style={{ flex: 10 }}>
                    <FlatList
                        data={this.getArrayList()}
                        renderItem={({ item }) => <Word exportword = {item}></Word>}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter></Filter>
            </View>

        );
    }
}
function mapPropstoState(state) {
    return {
        myfilter: state.filter,
        myWord:state.arrword,
        isAdding:state.isAdding,
       
    }
}
export default connect(mapPropstoState)(Main)
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
       },
})