import React, {Component} from 'react';
import { render } from 'react-dom';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
 
} from 'react-native';

// import { stylesButton} from './src/Styles/stilo';
import Header from "../Componentes/Header";
import { stylesButton } from '../Styles/stilo';

export class MenuScreen extends Component {

render() {
  return (

    <View style= {{flex: 1, backgroundColor: 'black'}}>
      
    <Header></Header>
      

<View style= {stylesButton.container}>

<View style= {stylesButton.stiloImportar}> 
<Text style = {stylesButton.stiloImportarTexto} onPress={() => this.props.navigation.navigate('Screen FlatList')}> Tarjetas Importadas </Text>
  
  </View>

  <View style= {stylesButton.stiloImportar}> 
        <Text style= {stylesButton.stiloImportarTexto} onPress={() => this.props.navigation.navigate('Papelera')} > Papelera de reciclaje </Text>
    </View>

    <View style= {stylesButton.stiloImportar}> 
        <Text style= {stylesButton.stiloImportarTexto} onPress={() => this.props.navigation.navigate('NosotrasScreen')}> Acerca de nosotros! </Text>
    </View>
   
  

    </View>
  
  </View>

  )

}
}