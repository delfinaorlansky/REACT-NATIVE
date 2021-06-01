import React, {Component} from "react";
import { View } from "react-native";
import { stylesTarjeta } from '../Styles/stilo'

class App extends Component {

    render(){
        const { img, firstName, lastName, Email, city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;
  
  
return(

    <View style={stylesTarjeta.tarjeta}>

<Text style={stylesTarjeta.Titulo}>{firstName},{lastName}</Text>
                   <Text style={stylesTarjeta.TextoCard} >Location: {city}, {State}, {Country}</Text>
                   <Text style={stylesTarjeta.TextoCard}>Birthdate:{Date.substring(0,10)} </Text>
                   <Text style={stylesTarjeta.TextoCard}>Current age: {Bithday}
</Text>

    </View>




)}
}

export default App;