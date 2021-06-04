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

import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Header from "../Componentes/Header";
import {Screen_FlatList} from './src/Screens/Screen_FlatList';



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

 



render() {

  return(
    <Screen_FlatList/>
  )

}
}




export default App;



