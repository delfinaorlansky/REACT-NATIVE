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

import { stylesButton, stylesConsola, stylesText } from '../Styles/stilo';
import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';





class Header extends Component {


    render() {

return (

<View style= {stylesConsola.stiloConsola}> 
     
<View style= {stylesConsola.stiloIcon}></View>

   <FontAwesomeIcon style= {stylesConsola.stiloIconSearch} icon= {faSearch} />
   <FontAwesomeIcon style= {stylesConsola.stiloIconBell} icon= {faBell} />

   {/* <TouchableOpacity onPress= {() => this.setState({textoIngresado: this.state.textHandlerNombre + "" + this.state.textHandlerApellido + "" + this.state.textHandlerTelefono})}> */}

   <FontAwesomeIcon style= {stylesConsola.stiloIconBars} icon={faBars}  />
   
   {/* </TouchableOpacity> */}
  
  <Text style={stylesConsola.stiloConsolaTexto}> MyConections </Text> 
</View>

 ) }}


//  const stylesConsola = StyleSheet.create (
//     {
//       stiloConsola: {
 
//       backgroundColor: '#2C2828',
//       height: 80,
    
    
// },
//       stiloIconSearch: {
//         color: '#fff',
//         top: 45, 
//         marginLeft: 370

//       },

//       stiloIconBell: {
//         color: 'white', 
//         top: 30, 
//         marginLeft: 340

//       },

//       stiloIconBars: {
//         color: 'white', 
//         top: 20, 
//         marginLeft: 25

//       },

//       stiloConsolaTexto:{
//        color: 'white',
//        fontSize: 15,
//        top: 1,
//        marginLeft: 150
//        },

      
        
        
        
 
       
//     }
//   )

export default Header
