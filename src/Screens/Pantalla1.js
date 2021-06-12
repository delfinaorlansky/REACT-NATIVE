import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export class Pantalla1 extends Component (
    render(){
        return(
            <View style=styles.container>
            <Text> Pantalla 1 </Text>
            </View>
        )
    }
)
const styles = StyleSheet.create{
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
}