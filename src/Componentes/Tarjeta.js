import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {Component} from "react";
import { TouchableOpacity, View, Image, Text, Modal, Button} from "react-native";
import { styles } from '../Styles/stilo';
//import de 
export class Tarjeta extends Component {
    
  constructor(){
      super();
        this.state = {
          showModal: false,
          itemModal: null,
          tarjetasBorradas: []
        }
      }
    
showModal(item){
  this.setState({itemModal: item,   showModal: !this.state.showModal});
}


   
  //borrar tarjetas
//   async removeItem(value){
   
//     try{
//   let storage = await AsyncStorage.getItem('@tarjetasBorradas') //es un string, obtenemos las tarjetas q borramos
//   storage = JSON.parse(storage) //ahora pasa a ser un array
  
//   if(storage==null) storage = []
//   storage.push (value) //agregamos la nueva tarjeta q queremos borrar al array

//   const jsonValue = JSON.stringify(storage) 


// await AsyncStorage.setItem('@tarjetasBorradas', jsonValue) 
// await this.props.removeContact(value.login.uuid) //remove contact es un metodo asincronico, entonces necesita el awate

// let arrayBorrados = [...this.state.personBorrada, ...Borrado]
// this.setState({person: resultados, personBorrada: arrayBorrados})

// storeDataBorrado(arrayBorrados, '@Borrados') 

// }
//    catch (error) {
//        console.log(error);
//    }
// }



render () {
  return(
    
    <TouchableOpacity  onPress={() => this.showModal(this.props.item) } >
         <View style={styles.container} >
         <View style={styles.tarjeta}>
         {/* <TouchableOpacity onPress={() => this.props.seleccionarTarjeta(this.props.item)}> 
          <Text> hola </Text>
        </TouchableOpacity> 
     <TouchableOpacity onPress ={()=> this.removeItem(this.props.item)}> 
     <Text style={styles.closeButton} >  X
     </Text> */}
     {/* </TouchableOpacity> */}
         <Image style={styles.imagen} source={{uri: this.props.item.picture.large}}/>
         <Text style= {styles.titulo}> {this.props.item.name.first}</Text>
         <Text style= {styles.titulo}> {this.props.item.name.last}</Text>
         <Text style={styles.texto} > Email: {this.props.item.email}</Text>
         <Text styles={styles.texto}> Register date: {this.props.item.dob.date.substring(0,10)} ({this.props.item.dob.age})</Text>
         
       
         <Modal 
         
         visible={this.state.showModal} 
         animationType="fade"
         transparent={true}>
         
       <View style={styles.modalContainer}>  
          
          <View style={styles.modal}> 
            
            <Text style={styles.textModal}>
              <Text> Location: {this.props.item.location.street.name},
                                {this.props.item.location.street.number}, 
                                {this.props.item.location.city},
                                {this.props.item.location.country}, 
                                {this.props.item.location.postcode} 
              </Text> 

              <Text> Register Date: {this.props.item.registered.date.substring(0,10)} </Text> 
              
              <Text> Phone: {this.props.item.phone} </Text> 
              {

              this.state.itemModal && 
              this.state.itemModal.location.street.name &&
              this.state.itemModal.location.street.number &&
              this.state.itemModal.location.city &&
              this.state.itemModal.location.country &&
              this.state.itemModal.location.postcode &&
              this.state.itemModal.registered.date &&
              this.state.itemModal.phone
             
             }

              
              </Text> 
            <Text style={styles.closeButton} onPress={ () => this.setState({showModal: false})}> X </Text>
             </View>

        </View>
            
         </Modal>
         </View>

         </View>
     </TouchableOpacity>
 )
}
}


