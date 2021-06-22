import React, { Component } from 'react';
import {
    View,
    FlatList,
    Modal,
    TextInput,
    Button, 
    Text
} from 'react-native';
import { getData } from '../Biblioteca/RandomUsers';
import { Tarjeta } from "../Componentes/Tarjeta";

import Header from "../Componentes/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Styles/stilo';
import { storeDataBorrado } from '../Biblioteca/Estructura';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state = {
            contactos: [],
            cantidadContactos: 1, //valor inicial
            cargarDatos: false,
            text: '',

            search: '',

            visible: 6,
            contactoOriginal: [],
            textoBuscar: " ",
            contactosImportados: []
        }
    }

    keyExtractor = (item, idx) => item.login.uuid.toString();
    renderItem = ({ item }) => {
        return(
            <Tarjeta seleccionarTarjeta={this.seleccionarTarjeta.bind(this)} item={item} removeContact={this.removeContact.bind(this)}>
            </Tarjeta>
            // <Tarjeta  item={item} removeContact={this.removeContact.bind(this)}>
            // </Tarjeta>
        
        )
    }
    seleccionarTarjeta = (item) => {
        this.state.contactosImportados.push(item) //el push agrega elementos al array
        AsyncStorage.setItem('@contactosImportados', this.state.contactosImportados) // @ solo va en el set no en el get. 
        console.log('contactosImportados', AsyncStorage.getItem('@contactosImportados'))
    }

    separator = () => {
        return (
            <View style={styles.separator} />
        )
    }

    async removeContact(id) {
        let contactosFiltrados = this.state.contactos.filter((item) => { return item.login.uuid !== id })
        this.setState({ contactos: contactosFiltrados })
        contactosFiltrados = JSON.stringify(contactosFiltrados)  //tenemos q borrar cada tarjeta del almacenamiento tambien
        await AsyncStorage.setItem('@misContactos', contactosFiltrados)

        await this.storeDataBorrado(contactosFiltrados.results, '@misContactos')
    }

    async storeDataBorrado(value, key) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
        }
    }


    filter(text) {
        if (text.length > 0) {


            // var text = target.value
            const tarjetas = this.state.contactos
            const filtrado = tarjetas.filter((item) => {

                const itemFirst = item.name.first.toUpperCase()
                const lastName = item.name.last.toUpperCase()
                const edad = item.dob.age.toString()
                const textoIngresado = text.toUpperCase()

                return (
                    itemFirst.includes(textoIngresado) ||
                    lastName.includes(textoIngresado) ||
                    edad.includes(textoIngresado)
                    // comparo name o last name o age con el valor ingresado .
                )
            })
            this.setState({
                //sete el estado de person con lo filtrado
                contactos: filtrado,
                textoBuscar: text,
            })
        } else {
            this.setState({
                // si no busco nada queda igual

                contactos: this.state.contactoOriginal
            })
        }
    }


    updateSearch = () => {
        const tarjetas = this.state.contactos

        tarjetas.filter((item) => {

            const itemFirst = item.name.first.toUpperCase();
            const lastName = item.name.last.toUpperCase();
            const edad = item.dob.age.toString();
            const textoIngresado = this.state.search.toUpperCase();
            //this.setState({ search });
            return (
                itemFirst.includes(textoIngresado) ||
                lastName.includes(textoIngresado) ||
                edad.includes(textoIngresado)
                // comparo name o last name o age con el valor ingresado .
            )

        })
    };

    cargarTarjetas = () => {



        getData(this.state.cantidadContactos)
            .then(results => {
                console.log(results);
                this.setState({ contactos: results })
            })
    }


    render() {
        const { search } = this.state;
        return (
            <View>
                <Header />
                <TextInput style={styles.SearchBar} placeholder="Buscar" onChangeText={text => { this.setState({ search: text }); this.filter(text) }} value={search} />
                <TextInput placeholder="Ingrese cantidad" keyboardType="numeric" onChangeText={text => { this.setState({ cantidadContactos: text }) }} >
                </TextInput>
                <Button title="Cargar" onPress={() => this.cargarTarjetas()}> Cargar</Button>
                <View>

                    <FlatList
                        data={this.state.contactos}
                        renderItem={this.renderItem}
                        separator={this.separator}
                        keyExtractor={this.keyExtractor}
                        filter={this.filter}
                        updateSearch={this.updateSearch}
                        key={this.state.contactos}
                        onDelete={this.removeContact.bind(this)}
                    >
                    </FlatList>

                </View>

            </View>
        )
    }
    componentDidMount() {
        // getData(this.state.cantidadContactos)
        // .then( results => {
        //     console.log(results);
        //     this.setState({contactos: results})
        // })



    }
}


