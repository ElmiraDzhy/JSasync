'use strict';


const p = fetch('https://fakestoreapi.com/products');

// console.dir(p);

p.then((response) => {
    console.log('success');
    console.log(response); //response - обьект ответа

    const jsondata = response.json();
    jsondata.then(
        (jsData) => {
            console.log('i am here')
            console.log(jsData);
        }, 
        
        () => {
            console.log('ERROR')
        }
    );

}, (error) => {
    console.log('error :')
    console.log(error);
}); //говорим что делать, когда промис изменит статус



