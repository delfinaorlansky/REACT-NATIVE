import React, {Component} from 'react';
import { render } from 'react-dom';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Card
 
} from 'react-native';

import { stylesButton, stylesConsola, stylesText } from './src/Styles/stilo';
import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from "./Tarjeta";



class App extends Component{
  constructor (){
    super ();
    this.state = {
      data: [],
      isLoading: true,
      usuariosa: {}
      
    }
  }


componentDidMount() {

  const getUsersAsync = async () => {
    try {
        let response= await fetch ('https://randomuser.me/api/?results=50');
        let json = await response.json();
        return json.results;
    } catch (error) {
        console.log (error);
    }
};

}

render() {
 const usuarios = this.state.data.map(usuarios=> {
   return(
      <Text key={usuarios.login.uuid}> {usuarios.login.uuid} </Text>
   )
 })
  return (

    <View style= {{flex: 1, backgroundColor: 'black'}}>

      <View style= {stylesConsola.stiloConsola}> 
     
      <View style= {stylesConsola.stiloIcon}></View>

         <FontAwesomeIcon style= {stylesConsola.stiloIconSearch} icon= {faSearch} />
         <FontAwesomeIcon style= {stylesConsola.stiloIconBell} icon= {faBell} />

         <TouchableOpacity onPress= {() => this.setState({textoIngresado: this.state.textHandlerNombre + "" + this.state.textHandlerApellido + "" + this.state.textHandlerTelefono})}>

         <FontAwesomeIcon style= {stylesConsola.stiloIconBars} icon={faBars}  />
         
         </TouchableOpacity>
        
        <Text style={stylesConsola.stiloConsolaTexto}> MyConections </Text> 

        <View>

        {usuarios}

        
       
        </View>


      </View>
      

  

  
  </View>

  )

}

}




export default App;



