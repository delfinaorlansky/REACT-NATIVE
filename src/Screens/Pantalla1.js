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
            <Text style = {styles.titulo}> Pantalla 1 </Text>
            <Text style = {styles.texto} onPress={() => this.props.navigation.navigate('Pantalla 2')}> Ir a la pantalla 2 </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    titulo:{
        fontSize:40,
        fontWeight: 'bold',
        color: 'pink',
    },
    texto:{
        fontSize:30,
        color: 'pink'
    }
})