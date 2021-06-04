import React,  {Component} from 'react';
import {
View,
FlatList,
} from 'react-native';
import {getData} from '../Biblioteca/RandomUsers';

import {Tarjeta} from "../Componentes/Tarjeta";
import Header from "../Componentes/Header";


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state  = {
            contactos:  []
        }
    }
    keyExtractor = (item, idx) => item.login.uuid.toString();
    renderItem = ({item}) => {
        return(
        
            
            <Tarjeta item={item}> </Tarjeta>
          
        )
        
     }
  
  separator=() => {
      return (
          <View style={styles.separator}/>
      )
  }


render() {

    return(
        <View>
               <Header/>
         <FlatList
            data={this.state.contactos} renderItem={this.renderItem} separator={this.separator} keyExtractor={this.keyExtractor}
         />

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


