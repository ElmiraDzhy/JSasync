'use strict';


// async load img



 function loadImg(src){
    const img = document.createElement('img');
    img.setAttribute('src', src);

    return new Promise((res, rej) => {
        img.addEventListener('load', (event) => {
            res(img);
        });
        
        img.addEventListener('error', () => {
            rej('img error')
        });

    })
}


const root = document.querySelector('#root');
const div = document.createElement('div');
div.classList.add('wrapper');
root.append(div);

const img = loadImg('https://i.pinimg./originals/e0/e9/f7/e0e9f7ec88289f2445827a47e7a0af79.jpg')
    .then( (img) => div.append(img),
            (err) => console.log(err)
        );

