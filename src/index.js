'use strict';
setTimeout(function(){
    console.log('message from timer');
    asyncFun();
    setTimeout(function(){
        console.log('message from another timer');
        asyncFun();
    }, 0)
}, 1000)

function asyncFun(){
    console.log('async');
}

console.log('Sync work');