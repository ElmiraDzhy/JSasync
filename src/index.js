'use strict';



const p = new Promise(executor);


function executor(res, rej){

    if(Math.random() > 0.5){
        res(true);
    }

    else{
        rej(false);
    }
}


p.then(( ) => {
    console.log('кіт живий');
},
() => {
    console.log(`кіт не живий`);
})


console.log(p)
