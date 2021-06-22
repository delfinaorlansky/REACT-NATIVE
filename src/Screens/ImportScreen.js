import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ImportScreen extends Component {
    async removeContact(id) {
        let contactosFiltrados = this.state.contactos.filter((item) => { return item.login.uuid !== id })
        this.setState({ contactos: contactosFiltrados })
        contactosFiltrados = JSON.stringify(contactosFiltrados)  //tenemos q borrar cada tarjeta del almacenamiento tambien
        await AsyncStorage.setItem('@misContactos', contactosFiltrados)

        await this.storeDataBorrado(contactosFiltrados.results, '@misContactos')
    }
    // async storeDataBorrado(value, key) {
    //     try {
    //         const jsonValue = JSON.stringify(value)
    //         await AsyncStorage.setItem(key, jsonValue)
    //     } catch (e) {
    //     }
    // }
    render() {

        return (

            <View>
                <Text> TARJETAS IMPORTADAS</Text>
            </View>
        )
    }   
}