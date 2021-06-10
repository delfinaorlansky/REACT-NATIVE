export async function getData() {
    try{
        const resultado= await fetch('https://randomuser.me/api/?results=10');
        const json = await resultado.json();
        return json.results;
    }catch(e) {
        console.log("ERR: " + e);
    }
}

export const loadMore = async ()=> {
    let agregado = '';
    getDataVerMas('@VerMas')
    .then(resultado=> {
      agregado = resultado
    })


    try {

          fetch('https://randomuser.me/api/?results='+ agregado)
          .then(response => response.json())
          .then ((data)=>{
            setDataIndex(data, '@guardado')
          })

    } catch (error) {
      console.log(error);
      return [];
    }
   
    }