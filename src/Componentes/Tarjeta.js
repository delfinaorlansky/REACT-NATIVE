import React, {Component} from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { styles } from '../Styles/stilo.js';

export class Tarjeta extends Component {
    

  
  
  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {

    return(

   <TouchableOpacity onPress={() => Alert.alert("Edad: " + item.dob.age)}>
        
        <View style={styles.tarjeta}>
        
        <Image style={styles.imagen} source={{uri: item.picture.thumbnail}}/>
        <Text style= {styles.text}> {item.name.first}</Text>
        <Text style= {styles.text}> {item.name.last}</Text>
        
        </View>
    </TouchableOpacity>

   
)}

separator=() => {
    return (
        <View style={styles.separator}/>
    )
}
}

