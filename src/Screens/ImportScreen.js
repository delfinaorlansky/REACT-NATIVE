import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Tarjeta } from "../Componentes/Tarjeta";
import AsyncStorage from '@react-native-async-storage/async-storage';
export class ImportScreen extends Component {


    constructor(){
        super();
        this.state={
            contador: 0,
            contactosImportados: [],
            }
        }
      
    // async removeContact(id) {
    //     let contactosFiltrados = this.state.contactos.filter((item) => { return item.login.uuid !== id })
    //     this.setState({ contactos: contactosFiltrados })
    //     contactosFiltrados = JSON.stringify(contactosFiltrados)  //tenemos q borrar cada tarjeta del almacenamiento tambien
    //     await AsyncStorage.setItem('@misContactos', contactosFiltrados)

    //     await this.storeDataBorrado(contactosFiltrados.results, '@misContactos')
    // }
    // async storeDataBorrado(value, key) {
    //     try {
    //         const jsonValue = JSON.stringify(value)
    //         await AsyncStorage.setItem(key, jsonValue)
    //     } catch (e) {
    //     }
    // }

    async getDataVerTarjetas(){
        try {
            const resultado= await AsyncStorage.getItem("Contactos");
            this.setState({contactosImportados: JSON.parse(resultado)});
        }
        catch(error){console.log(error)};
      }
       
      async removeContact(){
        try {
            const jsonContactosEliminar= JSON.stringify(this.state.contacosImportados);
            await AsyncStorage.setItem("contacosEliminados", jsonContactosAEliminar);
            console.log("Datos guardados correctamente");
            this.setState({contactosImportados: ""})
            }
        catch(error){
          console.log(error)
        }
      }
    render() {

        return (
            <SafeAreaView> 

            <View>
                <Tarjeta info={this.state.contactosImportados}/>
            </View>

            <Button title='Eliminar contactos importados' onPress={()=>this.removeContact()}/>
                  <Button title='Mostrar contactos importados' onPress={()=>this.getDataVerTarjetas()}/>

           </SafeAreaView>
        )
    }   
}