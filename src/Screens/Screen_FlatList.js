import React,  {Component} from 'react';
import {

} from 'react-native';
import {getData} from './Bibliotecta/RandomUsers';

import Tarjeta from "./Componentes/Tarjeta";
import Header from "./Componentes/Header";


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state  = {
            contactos:  []
        }
    }



render() {

    return(
        <View>
           <Header></Header>
           <Tarjeta> </Tarjeta>
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


