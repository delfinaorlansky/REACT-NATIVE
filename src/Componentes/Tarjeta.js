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

    <TouchableOpacity  onPress={() => this.showModal(item) } >
         <View style={styles.container} >
         <View style={styles.tarjeta}>
         
         <Image style={styles.imagen} source={{uri: this.props.item.picture.large}}/>
         <Text style= {styles.titulo}> {this.props.item.name.first}</Text>
         <Text style= {styles.titulo}> {this.props.item.name.last}</Text>
         <Text style={styles.texto} > Email: {this.props.item.email}</Text>
         <Text styles={styles.texto}> Register date: {this.props.item.dob.date.substring(0,10)} ({this.props.item.dob.age})</Text>
         
         {/* <Button title='View More' onPress={() => this.setState({showModal: !this.state.showModal}) }  > </Button> */}
         
         <Modal 
         
         visible={this.state.showModal} 
         animationType="fade"
         transparent={true}>
         
       <View style={styles.modalContainer}>  
          
          <View style={styles.modal}> 
            
            <Text  style={styles.textModal}>
              {
              this.state.itemModal && 
              this.state.itemModal.name.first
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



