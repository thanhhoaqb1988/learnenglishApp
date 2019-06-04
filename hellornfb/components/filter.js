import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color:'white',
          a:2,
          b:1,
          c:0
        }
      }

      getdispatch(actiontype) {
        this.props.dispatch({type:actiontype})
         
        // if(this.state.a===this.state.b)return this.setState({c:this.state.a+this.state.b})
        // return this.state.c;
}
getTextStyle(statusName1) {
    const { myfilter } = this.props;
    if (statusName1 === myfilter) 
    return { color: 'yellow', fontWeight: 'bold' };
    return style.buttonText;
}

    render() {
        return (
            <View style={style.buttonstyle}>
                    <TouchableOpacity  onPress={()=> this.getdispatch('FILTE_SHOW ALL') }>
                        <Text style={this.getTextStyle('SHOW ALL')}>Show All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.getdispatch('FILTE_MEMORIZED')} >
                        <Text style={this.getTextStyle('MEMMORIZED')}  > Memorized</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.getdispatch('FILTE_NEED PRACTICE')}>
                        <Text style={this.getTextStyle( 'NEED PRACTICE')} > need practice</Text>
                    </TouchableOpacity>
                </View>
        )
    }
};
function mapPropstoState1(state) {
    return {
        myfilter: state.filter, 
    }
}
export default connect (mapPropstoState1)(Filter)
const style = StyleSheet.create({
    buttonstyle: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: 'white',
    }
})

