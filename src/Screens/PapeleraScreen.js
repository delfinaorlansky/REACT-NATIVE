import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Tarjeta} from "../Componentes/Tarjeta";

export class PapeleraScreen extends Component {
  
  constructor() {
    super();
    this.state  = {
      contactos:[],

    }}

  render() {

    return (

      <View>
        { this.state.contactos.map((contactos) => (
       <Tarjeta
       key={this.state.contactos}
       onDelete= {this.removeContatc.bind(this)}
       >
       </Tarjeta>
        ))}
      </View>

    )
  }
}