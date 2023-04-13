'use strict';

setTimeout(function(){
    console.log('message1');

}, 1000);

console.log('message2');
console.log('message3');


setInterval(() => {
    console.log('message4');

}, 20000)