'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    age: 23,
    address: {
        sity: 'London',
        street: 'Square',
        house: 12,
    },
    isSubscribe: true,
    songs: ['Song1', 'song2', 'song3'],
    friend: null,
    gymAbonement: undefined,
    sayHi: function(){
        console.log('hi');
    },
}

console.log(JSON.stringify(user));
const str = JSON.stringify(user);

console.log(JSON.parse(str));