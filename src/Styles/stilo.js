import {StyleSheet} from 'react-native';


export const styles= StyleSheet.create({

  
  
  tarjeta: {
    padding: 5,
    width: 400,
    height: 400,
    backgroundColor: '#F9D0F9',
    
  

  },

  Titulo:{
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
   },
   
   textoTarjeta: {
     fontSize: 15,
     marginTop: 10,
     marginBottom: 1,
     fontWeight:'bold',
    },

    imagen:{
    width: 320, 
    height: 250, 
    borderRadius: 10,
    marginLeft: 20,
     borderColor: 'black',
     borderWidth: 3
     
    },

    separator: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }
})

export const stylesButton= StyleSheet.create({
    stiloImportar: {
      borderRadius: 10, 
      width: 400, 
      height: 100,  
      backgroundColor: 'pink',  
      top: 10, 
      marginLeft: 8,  
      flex: 1.25,

    },

    stiloImportarTexto: {
      fontSize: 25, 
      top: 30, 
      marginLeft: 100
    }

   

  

   })

  export const stylesText = StyleSheet.create({
    

  })

 export const stylesConsola = StyleSheet.create (
    {
      stiloConsola: {
 
      backgroundColor: '#2C2828',
      height: 80,
    
    
},
      stiloIconSearch: {
        color: '#fff',
        top: 45, 
        marginLeft: 370

      },

      stiloIconBell: {
        color: 'white', 
        top: 30, 
        marginLeft: 340

      },

      stiloIconBars: {
        color: 'white', 
        top: 20, 
        marginLeft: 25

      },

      stiloConsolaTexto:{
       color: 'white',
       fontSize: 15,
       top: 1,
       marginLeft: 150
       },
    }
  )
