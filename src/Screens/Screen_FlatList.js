import React, { Component } from 'react';
import {
    View,
    FlatList,
    Modal,
    TextInput,
    Button, 
    Text,
    ActivityIndicator,
    SafeAreaView,
    Alert
} from 'react-native';
import { getData } from '../Biblioteca/RandomUsers';
import { Tarjeta } from "../Componentes/Tarjeta";

import Header from "../Componentes/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Styles/stilo';
import { storeDataBorrado } from '../Biblioteca/Estructura';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state = {
            contactos: [],
            cantidadContactos: 0, //valor inicial
            cargarDatos: false,
            text: '',
            search: '',
            contactoOriginal: [],
            textoBuscar: " ",
            contactosImportados: []
        }
    }

    componentDidMount() {
    }

    keyExtractor = (item, idx) => item.login.uuid.toString();
    renderItem = ({ item }) => {
        return(
            <Tarjeta item={item}>
            {/* seleccionarTarjeta={this.seleccionarTarjeta.bind(this)} item={item} */}
            {/* removeContact={this.removeContact.bind(this)} */}
            </Tarjeta>
            // <Tarjeta  item={item} removeContact={this.removeContact.bind(this)}>
            // </Tarjeta>
        
        )
    }

    async getData (){
      this.setState({cargarDatos: true});
      let  contactos = await getData(this.state.cantidadContactos);
      this.setState({contactos: contactos, cargarDatos: false});
      Alert.alert("Usted importo " +  this.state.cantidadContactos + " contactos.")
    }

    async storeDataContactos(){
      try{
        const jsonContactos= JSON.stringify(this.state.contactos);
        await AsyncStorage.setItem("Contactos", jsonContactos);


      } catch(error){console.log(error);}
    }


    // seleccionarTarjeta = (item) => {
    //     this.state.contactosImportados.push(item) //el push agrega elementos al array
    //     AsyncStorage.setItem('@contactosImportados', this.state.contactosImportados) // @ solo va en el set no en el get. 
    //     console.log('contactosImportados', AsyncStorage.getItem('@contactosImportados'))
    // }

    separator = () => {
        return (
            <View style={styles.separator} />
            
        )
    }
//buscador

    // filter(text) {
    //     if (text.length > 0) {


    //         // var text = target.value
    //         const tarjetas = this.state.contactos
    //         const filtrado = tarjetas.filter((item) => {

    //             const itemFirst = item.name.first.toUpperCase()
    //             const lastName = item.name.last.toUpperCase()
    //             const edad = item.dob.age.toString()
    //             const textoIngresado = text.toUpperCase()

    //             return (
    //                 itemFirst.includes(textoIngresado) ||
    //                 lastName.includes(textoIngresado) ||
    //                 edad.includes(textoIngresado)
    //                 // comparo name o last name o age con el valor ingresado .
    //             )
    //         })
    //         this.setState({
    //             //sete el estado de person con lo filtrado
    //             contactos: filtrado,
    //             textoBuscar: text,
    //         })
    //     } else {
    //         this.setState({
    //             // si no busco nada queda igual

    //             contactos: this.state.contactoOriginal
    //         })
    //     }
    // }


    // updateSearch = () => {
    //     const tarjetas = this.state.contactos

    //     tarjetas.filter((item) => {

    //         const itemFirst = item.name.first.toUpperCase();
    //         const lastName = item.name.last.toUpperCase();
    //         const edad = item.dob.age.toString();
    //         const textoIngresado = this.state.search.toUpperCase();
    //         //this.setState({ search });
    //         return (
    //             itemFirst.includes(textoIngresado) ||
    //             lastName.includes(textoIngresado) ||
    //             edad.includes(textoIngresado)
    //             // comparo name o last name o age con el valor ingresado .
    //         )

    //     })
    // };

    // cargarTarjetas = () => {



    //     getData(this.state.cantidadContactos)
    //         .then(results => {
    //             console.log(results);
    //             this.setState({ contactos: results })
    //         })
    // }


    render() {
        const { search } = this.state;
        return (
          
          <SafeAreaView>
         
                <Header />
                {/* <TextInput style={styles.SearchBar} placeholder="Buscar" onChangeText={text => { this.setState({ search: text }); this.filter(text) }} value={search} /> */}
               
               <View> 
                <TextInput placeholder="Ingrese cantidad" keyboardType="numeric" onChangeText={text => { this.setState({ cantidadContactos: text }) }} >
  
                </TextInput>
                <Button title="Cargar"  onPress={() => this.getData()}></Button>
                {/* <Button title="Cargar" onPress={() => this.cargarTarjetas()}> Cargar</Button> */}

                </View>
               
               <View>
                  { 
                  this.state.cargarDatos
                  }

              <Button title='Importar contactos' onPress={()=>this.storeDataContactos()}/>     
              
               </View>
   
                <View >

               
                    <FlatList 
                        data={this.state.contactos}
                        renderItem={this.renderItem}
                        separator={this.separator}
                        keyExtractor={this.keyExtractor}
                        filter={this.filter}
                        updateSearch={this.updateSearch}
                        key={this.state.contactos}
                        // onDelete={this.removeContact.bind(this)}
                    >
                    </FlatList>

                    </View>

              

          

            </SafeAreaView>
        )
    }
   
}


