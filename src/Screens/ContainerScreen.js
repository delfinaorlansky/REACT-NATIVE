import React,  {Component} from 'react';
import {
View,
FlatList,
Modal
} from 'react-native';
import {getData} from '../Biblioteca/RandomUsers';
import {Tarjeta} from "../Componentes/Tarjeta";
import Header from "../Componentes/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stylesBuscador } from '../Styles/stilo';

export class Buscar extends Component {
    render(){
        return (
            <View style={stylesBuscador.container}>
                <View style={stylesBuscador.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={stylesBuscador.lineatexto}>
                            ≡
                        </Text>
                    </TouchableOpacity>
                </View>

             <Text style={stylesBuscador.titulo}>Buscar</Text>
             <Text style={stylesBuscador.atras} onPress={ () => this.props.navigation.goBack()} >
             Volver atras </Text>

            </View>

        )}
    }
