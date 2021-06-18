import React,  {Component} from 'react';
import {
View,
FlatList,
Modal
} from 'react-native';
import {getData} from '../Biblioteca/RandomUsers';
import {Tarjeta} from "../Componentes/Tarjeta";
import Header from "../Componentes/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state  = {
            contactos:  [],
        }
    }
    keyExtractor = (item, idx) => item.login.uuid.toString();
    renderItem = ({item}) => {
        return(
            <Tarjeta item={item} removeContact={this.removeContact.bind(this)}> </Tarjeta> //.bind (this) xq estoy modificando el estado contactos
        )
     }
  separator=() => {
      return (
          <View style={styles.separator}/>
      )
  }
  async removeContact(id) {
      let contactosFiltrados =  this.state.contactos.filter ((item)=> 
          { return item.login.uuid !== id })
           this.setState ({contactos:contactosFiltrados})
          contactosFiltrados=JSON.stringify(contactosFiltrados)  //tenemos q borrar cada tarjeta del almacenamiento tambien
          await AsyncStorage.setItem('@misContactos', contactosFiltrados)
  }



//   NO ME SALE EL BUSCADORRRR :( :( :( :( :( :( :( :( :( 
    // filtrarTarjetas () { //esto lo tengo q definir en algun lado?
    //     let dataParaFiltrar = document.querySelector('.inputDataFiltro').nodeValue   usamos textinput dentro del render
    //     let campoAfiltrar = docuement.querySelector('.selectDataDiltro').nodeValue
    // }

render() {
    return(
        <View>
               <Header/>
         <FlatList
            data={this.state.contactos} renderItem={this.renderItem} separator={this.separator} keyExtractor={this.keyExtractor}/>
        </View>
    )
  }
    componentDidMount() {
        getData()
        .then( results => {
            console.log(results);
            this.setState({contactos: results})
        })
    }
}


