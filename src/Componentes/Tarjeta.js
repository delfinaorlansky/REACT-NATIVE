import React, {Component} from "react";
import { Alert, TouchableOpacity, View, Image, Text} from "react-native";
import { styles } from '../Styles/stilo';

export class Tarjeta extends Component {
    
render(){
  return(

    <TouchableOpacity onPress={() => Alert.alert("Edad: " + this.props.item.dob.age)}>
         
         <View style={styles.tarjeta}>
         
         <Image style={styles.imagen} source={{uri: this.props.item.picture.thumbnail}}/>
         <Text style= {styles.textTarjeta}> {this.props.item.name.first}</Text>
         <Text style= {styles.textTarjeta}> {this.props.item.name.last}</Text>
         
         </View>
     </TouchableOpacity>
 )
}
}

// const styles= StyleSheet.create({

//     tarjeta: {
//       borderWidth: 3,
//       borderRadius: 10,
//       borderColor: '#00b8a9',
//       width: 350,
//       height: 600,
//       padding: 20,
//       marginTop: 10,
//       marginBottom: 10,
//       backgroundColor: '#f8f3d4', 
  
//     },
  
   
     
//      textTarjeta:{
//        fontSize: 15,
//        marginTop: 10,
//        marginBottom: 10,
//       },
  
//       imagen:{
//         width: 150, 
//         height: 150, 
//         borderRadius: 10,
//        marginLeft: 75,
//        borderColor: '#00b8a9',
//        borderWidth: 3,
//       },
  
//       separator: {
//         borderBottonColor: 'black',
//         borderBottonWidth: 1,
//       }
//   })

