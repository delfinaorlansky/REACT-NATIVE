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
    
    modalContainer:  {
      flex: 1,
      justifyContent: 'center',
      alignItems:  'center',
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
   
    modal: {
      backgroundColor: 'white',
      width: 300,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: 'black',
      elevation: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black'
    },

    textModal: {
      fontSize: 20

    },

    closeButton: {
    fontSize: 20,
    position: 'absolute',
    right: 20,
    top: 10
    },

    SearchBar: {
      height: 50,
      width:350,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: 'black',
      backgroundColor: '#FFFFFF',
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 3,
      borderRadius: 10,
      backgroundColor: 'azure', 
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
    
     
      backgroundColor: '#F9D0F9',
      width: 400,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: 'black',
     
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'white',
      marginTop: 30,


    },

    stiloImportarTexto: {
      fontSize: 30,
      // marginTop: 10,
      // marginLeft: 15,
      alignItems: 'center',
      marginTop: 7,
      fontWeight:'bold',

    },

    container:{
      flex: 1,
      alignItems: 'center',
      marginTop: 5
    },

   

  

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
