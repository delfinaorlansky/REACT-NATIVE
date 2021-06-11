import React, {Component} from "react";
import { Alert, TouchableOpacity, View, Image, Text} from "react-native";
import { styles } from '../Styles/stilo';

export class Tarjeta extends Component {
    
render(){
  return(

    <TouchableOpacity onPress={() => Alert.alert("Edad: " + this.props.item.dob.age)}>
         <View style={styles.container} >
         <View style={styles.tarjeta}>
         
         <Image style={styles.imagen} source={{uri: this.props.item.picture.large}}/>
         <Text style= {styles.titulo}> {this.props.item.name.first}</Text>
         <Text style= {styles.titulo}> {this.props.item.name.last}</Text>
         <Text style={styles.texto} > Email: {this.props.item.email}</Text>
         <Text styles={styles.texto}> Register date: {this.props.item.dob.date.substring(0,10)} ({this.props.item.dob.age})</Text>
         
         </View>

         </View>
     </TouchableOpacity>
 )
}
}



