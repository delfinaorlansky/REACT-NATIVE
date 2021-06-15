import React,  {Component} from 'react';
import {
View,
FlatList,
Modal
} from 'react-native';
import {getData} from '../Biblioteca/RandomUsers';

import {Tarjeta} from "../Componentes/Tarjeta";
import Header from "../Componentes/Header";
import { styles } from '../Styles/stilo';


export class Screen_FlatList extends Component {
    constructor() {
        super();
        this.state  = {
            contactos:  [],
            text: '',
            person: [],
            search: '',
            person: [],
            visible: 6,
            personOriginal:[],
            textoBuscar: " ",
            vermas: 0,
            personBorrada:[],
            personFAV:[],
            resultado:[],
            activity:true,
        }
    }  


    componentDidMount() {
        getData()
        .then( results => {
            console.log(results);
            this.setState({contactos: results, activity:false})
        })
    }
    

    
    
//  buscador
 filter(text){
    if (text.length > 0) {
       // var text = target.value
      const personajes = this.state.person
      const filtrado = personajes.filter((item) =>{

      const itemData = item.name.first.toUpperCase()
      const lastName = item.name.last.toUpperCase()
      const age = item.dob.age.toString()
      const textData = text.toUpperCase()
      console.log(age);
      return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
           // comparo name o last name o age con el valor ingresado .
       )})
      this.setState({
        //sete el estado de person con lo filtrado
          person: filtrado,
          textoBuscar: text,
      })
      } else {
      this.setState({
     // si no busco nada queda igual

       person:this.state.personOriginal}) 
      }
      }
      updateSearch = (text) => {
      const personajes = this.state.person
      const filtrado = personajes.filter((item) =>{
      const itemData = item.name.first.toUpperCase();
      const lastName = item.name.last.toUpperCase();
      const age = item.dob.age.toString();
      const textData = this.state.search.toUpperCase();
    //this.setState({ search });
      return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
     // comparo name o last name o age con el valor ingresado .
      )

       })};

       render(){
        const { search } = this.state;

        return(

            <View>

                <Header></Header>

                <Tarjeta></Tarjeta>

                <TextInput style={styles.SearchBar} placeholder="Search" onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}  />
           
            </View>

        

         ) }

    }
