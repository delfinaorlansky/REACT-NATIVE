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
      

<View style= {{flex:  1, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap'}}>

<View style= {stylesButton.stiloImportar}> 
<Text style = {stylesButton.stiloImportarTexto} onPress={() => this.props.navigation.navigate('Screen FlatList')}> Tarjetas Importadas </Text>
  
  </View>

  <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 20, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}} onPress={() => this.props.navigation.navigate('Papelera')} > Papelera de reciclaje </Text>
    </View>

    <View style= {{borderRadius: 10, width: 200, height: 150,  backgroundColor: 'pink',  top: 30, marginLeft: 8, flex: 1.40}}> 
        <Text style= {{fontSize: 25, top: 40, marginLeft:30}} onPress={() => this.props.navigation.navigate('NosotrasScreen')}> Acerca de nosotros! </Text>
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