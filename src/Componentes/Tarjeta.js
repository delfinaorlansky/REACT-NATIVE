import React, {Component} from "react";
import { Alert, TouchableOpacity, View, Image, Text} from "react-native";
import { styles } from '../Styles/stilo';

export class Tarjeta extends Component {
    
render(){
  return(

    <TouchableOpacity onPress={() => Alert.alert("Edad: " + this.props.item.dob.age)}>
         <View style={styles.container} >
         <View style={styles.tarjeta}>
         
         <Image style={styles.imagen} source={{uri: this.props.item.picture.thumbnail}}/>
         <Text style= {styles.textoTarjeta}> {this.props.item.name.first}</Text>
         <Text style= {styles.textoTarjeta}> {this.props.item.name.last}</Text>
         <Text style={styles.textoTarjeta} > Email: {this.props.item.email}</Text>
         <Text styles={styles.textoTarjeta}> Register date: {this.props.item.dob.date.substring(0,10)} ({this.props.item.dob.age})</Text>
         
         </View>

         </View>
     </TouchableOpacity>
 )
}
}



