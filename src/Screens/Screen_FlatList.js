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
      cantidadContactos: "0", //valor inicial
      cargarDatos: false,
      text: '',
      search: '',
      contactoOriginal: [],
      textoBuscar: " ",
      contactosImportados: [],
      numeroContactos: " ",
      apiImportada: []
    }
  }

  componentDidMount() {
    this.unsuscribe = this.props.navigation.addListener("focus", () => {
      this.getContactoStore();
    })
  }

  componentWillUnmount() {
    this.unsuscribe()
  }

  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({ item }) => {
    return (

      <View>
        <Tarjeta item={item}></Tarjeta>

        <TouchableOpacity onPress={() => this.storeOfContacts(item)}>
          <Text> Importar contacto! </Text>
        </TouchableOpacity>

      </View>
    )
  }

  // async getData (){
  //   this.setState({cargarDatos: true});
  //   let  contactos = await getData(this.state.cantidadContactos);
  //   this.setState({contactos: contactos, cargarDatos: false});
  //   Alert.alert("Usted importo " +  this.state.cantidadContactos + " contactos.")
  // }

  // async storeDataContactos(){
  //   try{
  //     const jsonContactos= JSON.stringify(this.state.contactos);
  //     await AsyncStorage.setItem("Contactos", jsonContactos);


  //   } catch(error){console.log(error);}
  // }




  // seleccionarTarjeta = (item) => {
  //     this.state.contactosImportados.push(item) //el push agrega elementos al array
  //     AsyncStorage.setItem('@contactosImportados', this.state.contactosImportados) // @ solo va en el set no en el get. 
  //     console.log('contactosImportados', AsyncStorage.getItem('@contactosImportados'))
  // }

  async storeOfContacts(value) {
    try {

      alert("El contacto seleccionado fue importado correctamente")

      this.state.contactosImportados.push(value)

      const jsonValue = JSON.stringify(this.state.contactosImportados)

      await AsyncStorage.setItem("@misContactos", jsonValue)

      let cantidadDeContactosImportados = this.state.contactosImportados.length
      this.setState({ cantidadContactos: cantidadDeContactosImportados })

      let resultado = this.state.contactos.filter((item) => {
        return item.login.uuid !== value.login.uuid
      })

      this.setState({ contactos: resultado })
    } catch (error) {
      console.log(error);
    }
  }

  cargarContactos() {
    this.getDataApi()
    this.setState({ cargarDatos: true })
  }

  async getDataApi() {
    let tarjetas = await getData(this.state.numeroContactos)
    this.setState({ contactos: tarjetas, apiImportada: tarjetas, cargarDatos: false })
  }

  async getContactoStore() {
    try {
      const value = await AsyncStorage.getItem("@misContactos");
      console.log(value);

      if (value !== null) {
        const tarjetas_recuperadas = JSON.parse(value);
        this.setState({ contactosImportados: tarjetas_recuperadas })
      } else {
        console.log("No existe");
      }
    } catch (error) {
      console.log(error);
    }
  }

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


        <View>
          <TextInput placeholder="Ingrese cantidad" keyboardType="numeric" onChangeText={text => { this.setState({ numeroContactos: text }) }} >

          </TextInput>
          <Button title="Cargar" onPress={this.cargarContactos.bind(this)}></Button>


        </View>

        <Text> Cantidad de importados : {this.state.cantidadContactos} </Text>

        <View>
          {
            this.state.cargarDatos
              ? <ActivityIndicator
                color="red"
                size={50}
              />

              : <FlatList
                data={this.state.contactos}
                renderItem={this.renderItem}
                separator={this.separator}
                keyExtractor={this.keyExtractor}


              >
              </FlatList>
          }



        </View>






      </SafeAreaView>
    )
  }

}


