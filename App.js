import React, {Component} from 'react';
import { render } from 'react-dom';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
 
} from 'react-native';

import { stylesButton, stylesConsola, stylesText } from './src/Styles/stilo';
import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



class App extends Component{
  constructor (){
    super ();
    this.state = {
      data: [],
      isLoading: true,
      persona: {}
      
    }
  }



componentDidMount() {

 fetch("https://randomuser.me/api/?results=10")
  .then((response => response.json()))
  .then ((responseJson) => {

    this.setState ({
     isLoading: false,
     data: responseJson.results
    });

  })
  .catch((error) => {
    console.error(error);
  });
 }

 async getObjectStorage(){
  try{
    const jsonValue = await AsyncStorage.getItem('@myObject');
    
    if(jsonValue !== null){
      const jsonParsed = JSON.parse(jsonValue);
      this.setState({persona: jsonParsed});
    }else{
      console.log('');
    }
  }catch(error){
    console.log(error);
  }
}

render() {
 const usuarios = this.state.data.map(usuario=> {
   return(
      <Text key={usuario.login.uuid}> {usuario.login.uuid} </Text>
   )
 })
  return (

    <View style= {{flex: 1, backgroundColor: 'black'}}>
   {usuarios}
      <View style= {stylesConsola.stiloConsola}> 
     
      <View style= {stylesConsola.stiloIcon}></View>

         <FontAwesomeIcon style= {stylesConsola.stiloIconSearch} icon= {faSearch} />
         <FontAwesomeIcon style= {stylesConsola.stiloIconBell} icon= {faBell} />

         <TouchableOpacity onPress= {() => this.setState({textoIngresado: this.state.textHandlerNombre + "" + this.state.textHandlerApellido + "" + this.state.textHandlerTelefono})}>

         <FontAwesomeIcon style= {stylesConsola.stiloIconBars} icon={faBars}  />
         
         </TouchableOpacity>
        
        <Text style={stylesConsola.stiloConsolaTexto}> MyConections </Text> 
      </View>
      

  

  
  </View>

  )

}

}




export default App;



