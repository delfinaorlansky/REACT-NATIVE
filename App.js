import 'react-native-gesture-handler';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Header from "../Componentes/Header";
import {Screen_FlatList} from './src/Screens/Screen_FlatList';
import {NosotrasScreen} from './src/Screens/NosotrasScreen';
import {MenuScreen} from './src/Screens/MenuScreen';
import {PapeleraScreen} from './src/Screens/PapeleraScreen';
const Stack = createStackNavigator();


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

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Menu principal" component={MenuScreen}/>
        <Stack.Screen name ="Screen FlatList"  component={Screen_FlatList} options={{title: "Contactos"}}/>
        <Stack.Screen name ="Papelera" component={PapeleraScreen}/>
        <Stack.Screen name ="NosotrasScreen" component={NosotrasScreen}/>
        {/* aca tenemos q poner todas las paginas que creemos */}
      </Stack.Navigator>
    </NavigationContainer>
 
  )

}
}

export default App;



