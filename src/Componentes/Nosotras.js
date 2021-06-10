import React, {Component} from 'react';
import { render } from 'react-dom';
import {
  View,
  Text,
  Image,
  ScrollView,

 
} from 'react-native';

import { stylesButton, stylesConsola, stylesText, styles } from '../Styles/stilo';
import { FontAwesomeIcon, fontAwesomeIcon } from   '@fortawesome/react-native-fontawesome';
import {faBars, faBell, faCoffee, faEnvelopeOpenText, faSearch} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';





class Nosotras extends Component {

 

render(){
     


        return(

     

          <ScrollView>
          
            <View style={styles.container}>
            
        
            <View style={styles.tarjeta} >
                <Image source={require('@Img/trini.jpg')} style={styles.imagen}  />
                <Text style={styles.Titulo}>Trinidad Pardo</Text>
                <Text style={styles.textoTarjeta} >Ubicación: Buenos Aires, Argentina</Text>
                <Text style={styles.textoTarjeta}>Fecha de nacimiento: 7 de febrero del 2001 </Text>
                <Text style={styles.textoTarjeta}>Edad: 20</Text>
            
            </View>

            <View style={styles.tarjeta} >
            <Image source={require('@Img/delfi.jpg')} style={styles.imagen}  />
                <Text style={styles.Titulo}>Delfina Orlansky</Text>
                <Text style={styles.textoTarjeta} >Ubicación: Buenos Aires, Argentina</Text>
                <Text style={styles.textoTarjeta}>Fecha de nacimiento: 19 de enero del 2001 </Text>
                <Text style={styles.textoTarjeta}>Edad: 20</Text>
            
            </View>
       

            <View style={styles.tarjeta} >
                <Image  source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048189.png"}} style={styles.imagen}  />
                <Text style={styles.Titulo}>Mora Jaichengo</Text>
                <Text style={styles.textoTarjeta} >Ubicación: Buenos Aires, Argentina</Text>
                <Text style={styles.textoTarjeta}>Fecha de nacimiento: 20 de diciembre de 1999  </Text>
                <Text style={styles.textoTarjeta}>Edad: 21</Text>
            
            </View>
       
          
          </View>
          </ScrollView>

     
          


        )
    };
    
}
 
export default Nosotras