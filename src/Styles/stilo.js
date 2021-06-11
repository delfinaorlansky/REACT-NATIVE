import {StyleSheet} from 'react-native';


export const styles= StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 5
  },
  
  tarjeta: {
    padding: 5,
      width: 400,
      height: 250,
      backgroundColor: '#F9D0F9',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 3,
      marginTop: 5
    },

  titulo:{
    fontSize: 20,
    marginTop: 5,
    
   },
   
   texto: {
    fontSize: 10,
    marginTop: 10,
    marginBottom: 1,
    fontWeight:'bold',
   },

    imagen:{
      width: 100, 
      height: 100, 
      borderRadius: 10,
      marginLeft: 10,
      borderColor: 'black',
      borderWidth: 3
     
    },

    separator: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      height: 3
  
    },

  })

    
export const stylesNosotras= StyleSheet.create({

    tarjeta: {
      padding: 5,
      width: 400,
      height: 250,
      backgroundColor: '#F9D0F9',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 3,
      marginTop: 5

      },

     

    titulo:{
      fontSize: 20,
      marginTop: 5,
      marginBottom: 5,
     },

     imagen:{
      width: 100, 
      height: 100, 
      borderRadius: 10,
      marginLeft: 10,
       borderColor: 'black',
       borderWidth: 3
       
      },

      container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 5
      },

      texto: {
        fontSize: 10,
        marginTop: 10,
        marginBottom: 1,
        fontWeight:'bold',
       },


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
