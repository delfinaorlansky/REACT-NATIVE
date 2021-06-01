import React,  {Component} from 'react';
import {

} from 'react-native';
import {getData} from '../Bibliotecta/RandomUsers';

import Tarjeta from "../Componentes/Tarjeta";


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state  = {
            contactos:  []
        }
    }

    render() {
        retun (
<View>
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


