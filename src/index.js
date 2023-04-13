'use strict';


const products = fetch('https://fakestoreapi.com/products');

// console.dir(p);

products.then((response) => {
    return response.json();
    }) 
    .then((data) => {
        console.log(data);
        const cardArray = data.map((obj) => createCard(obj));
        console.log(cardArray);
        const root = document.querySelector('#root');
        root.append(...cardArray);
    })
    .catch((error) => {
        console.log('error :')
        console.log(error);
    });



const userData = fetch('https://randomuser.me/api/?results=5');

userData.then((responce) => responce.json())
    .then((jsData) => console.log(jsData.results))
    .catch(error => console.log(`This is error: ${error}`))
    .finally(() => console.log('finally!!!!'));



function createCard(obj){

    const img = createElem('img', {classNames: ['card-image'], attributes: [{src: obj.image}]});
    const h3 = createElem('h3', {classNames: ['card-title']}, obj.title);
    const p = createElem('p', {classNames: ['card-description']}, obj.description);
    const button = createElem('button', {classNames: ['card-price']}, 'Buy: ', obj.price, ' $');
    const article = createElem('article', {classNames: ['card-container']}, img, h3, p, button);

    console.log(obj.image);

    return article;
}


function createElem(type, {classNames, attributes}, ...children){


    const elem = document.createElement(type);
    if(attributes){
        attributes.forEach((obj) => {
            for (const key in obj) {
                elem.setAttribute(key, obj[key]);
            }
        })
       
    }
    elem.classList.add(...classNames);
    elem.append(...children);


    return elem;
}