import React, {Component} from "react";
import { TouchableOpacity, View, Image, Text, Modal} from "react-native";
import { styles } from '../Styles/stilo';

export class Tarjeta extends Component {
    
  constructor(){
      super();
        this.state = {
          showModal: false,
          itemModal: null

        }
      }
    
showModal(item){
  this.setState({itemModal: item,   showModal: !this.state.showModal});
}
   

render () {
  return(
    
  

    <TouchableOpacity  onPress={() => this.showModal(this.props.item) } >
         <View style={styles.container} >
         <View style={styles.tarjeta}>
         
         <Image style={styles.imagen} source={{uri: this.props.item.picture.large}}/>
         <Text style= {styles.titulo}> {this.props.item.name.first}</Text>
         <Text style= {styles.titulo}> {this.props.item.name.last}</Text>
         <Text style={styles.texto} > Email: {this.props.item.email}</Text>
         <Text styles={styles.texto}> Register date: {this.props.item.dob.date.substring(0,10)} ({this.props.item.dob.age})</Text>
         
         {/* <Button title='View More' onPress={() => this.setState({showModal: !this.state.showModal}) }  > </Button>   */}
         <Modal 
         
         visible={this.state.showModal} 
         animationType="fade"
         transparent={true}>
         
       <View style={styles.modalContainer}>  
          
          <View style={styles.modal}> 
            
            <Text  style={styles.textModal}>
              <Text > Location: {this.props.item.location.street.name},{this.props.item.location.street.number}, {this.props.item.location.city},{this.props.item.location.country}, {this.props.item.location.postcode} </Text> 
              <Text > Register Date: {this.props.item.registered.date.substring(0,10)}
</Text> 
              <Text > Phone: {this.props.item.phone} </Text> 
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



