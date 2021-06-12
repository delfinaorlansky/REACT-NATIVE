import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export class Pantalla1 extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style = {styles.texto}> Pantalla 1 </Text>
            <Text onPress={() => this.props.navigation.navigate('Pantalla2')}> Ir a la pagina 2 </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})