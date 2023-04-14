'use strict';



async function getServerData(){
    try{
        const p = await fetch('https://randomuser.me/api/'); //p - response

        const data = await p.json();
        return data;
    }catch(errs){
        throw new Error();
    }
    

    

}



console.log(getServerData());

