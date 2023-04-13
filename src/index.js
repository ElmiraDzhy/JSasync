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



