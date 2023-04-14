'use strict';





const userData = fetch('https://randomuser.me/api/?results=20&seed=foobar');

userData.then((responce) => responce.json())
    .then((jsData) => {
        console.log(jsData.results)
        const usersArr =  jsData.results.map((user) => createCard(user));
        document.getElementById('root').append(...usersArr);
    })
    .catch(error => console.log(`Error: ${error}`))
    .finally(() => console.log('finally!!!!'));



function createCard(obj){
    const birth = obj.dob.date;
    const date = new Date(birth);

    const img = createElem('img', {classNames: ['user-image'], attributes: [{src: obj.picture.large}]});
    const h3 = createElem('h3', {classNames: ['user-name']}, `${obj.name.title} ${obj.name.first} ${obj.name.last}`);
    const p = createElem('p', {classNames: ['user-birth']}, `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
    const gender = createElem('p', {classNames: ['user-gender']}, obj.gender);
    const userMail = createElem('h4', {classNames: ['user-mail']}, obj.email);
    const followBtn = createElem('button', {classNames: ['btn', 'follow']}, 'Follow me');
    const textBtn = createElem('button', {classNames: ['btn', 'text']}, 'Text me');

    const div = createElem('div', {classNames: ['div-wrapper']});
    div.append(followBtn, textBtn);

    const divBirth = createElem('div', {classNames: ['div-birth']});
    divBirth.append(p, gender);


    const article = createElem('article', {classNames: ['user-card']}, img, h3, divBirth, userMail, div);

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