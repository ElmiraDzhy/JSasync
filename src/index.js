'use strict';


function loadFunc(){
    if(Math.random() > 0.5){
        return Promise.resolve(5);
    }
    else{
        return Promise.resolve(1);
    }
}

const res = loadFunc();
res.then((value) => {
    console.log(`PROMISE VALUE: ${value}`);
})


