'use strict';

// async function getAsyncWork(){

//     throw new Error();

// }

// const result = getAsyncWork();
// console.log(result);

async function getServerData(){
    const p = await fetch('https://rendomuser.me/api/'); //p - response

    const data = await p.json();

    //sync code

}

function syncFunc () {
    console.log('message from sync func');
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);

}

console.log(getServerData());

syncFunc();