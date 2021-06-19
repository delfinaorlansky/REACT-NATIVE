export async function getData(value) {
    try{
        const resultado= await fetch('https://randomuser.me/api/?results=' + value);
        const json = await resultado.json();
        return json.results;
    }catch(e) {
        console.log("ERR: " + e);
    }
}


    
    