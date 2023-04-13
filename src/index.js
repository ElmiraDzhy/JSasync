'use strict';


const p = fetch('https://fakestoreapi.com/products');

// console.dir(p);

p.then((response) => {
    return response.json();
    }) 
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('error :')
        console.log(error);
    });



const data = fetch('https://randomuser.me/api/?results=5');

data.then((responce) => responce.json())
    .then((jsData) => console.log(jsData.results))
    .catch(error => console.log(`This is error: ${error}`))
    .finally(() => console.log('finally!!!!'));