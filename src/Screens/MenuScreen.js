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
import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from "../Componentes/Header";

export class Menu extends Component {

render() {
  return (

    <View style= {{flex: 1, backgroundColor: 'black'}}>
      
    <Header></Header>
      

<View style= {{flex:  1, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap'}}>

<View style= {stylesButton.stiloImportar}> 

<Text style = {stylesButton.stiloImportarTexto} onPress={() => this.props.navigation.navigate('Screen FlatList')}> Tarjetas Importadas </Text>
    
  </View>

  <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 20, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}} onPress={() => this.props.navigation.navigate('Pantalla 3')} > Papelera de reciclaje </Text>
    </View>

    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 30, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}} onPress={() => this.props.navigation.navigate('Pantalla 4')}> Acerca de nosotros! </Text>
    </View>
   
    {/* <View style= {stylesButton.stiloImportar}> 
        <Text style= {stylesButton.stiloImportarTexto}> Importar Tarjetas </Text>
    </View>

    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 15, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}}> Ver tarjetas importadas </Text>
    </View>
    
    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 20, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}}> Papelera de reciclaje </Text>
    </View>

    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 25, marginLeft: 8, flex: 1.40, justifyContent: 'space-between'}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}}> Buscar Tarjetas </Text>
    </View>

    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 30, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}}> Acerca de nosotros! </Text>
    </View> */}

    </View>
  
  </View>

  )

}
}