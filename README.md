# Promises and Callbacks

## 1. Callbacks ☎️
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### heroe.js
```javascript
const heroes= [
    {
        name: 'spiderman',
        power: 'being humble'
    },
    {
        name: 'iron man',
        power: 'not being humble'
    },
    {
        name: 'hulk',
        power: 'humlkble'
    }
];

// Here we ask for the callback ☎️
export const searchHero = (id, callback) => {
    const hero = heroes[id];
    //We validate the data
    if (hero) {
        callback(null, hero);
    } else {
        callback(`The id: ${ id } doesn't exist`);
    }
}
```

### callback.js
```javascript
import {
    searchHero 
} from './heroes.js';

//callback is using a function as a parameter
searchHero(1, /*☎️ here*/ (err, hero) => {
    if(err){
        console.error(err);
    }else{
        console.log(`Hero is ${hero.name}`);
    }
});
//Output: Hero is iron man
```

## 2. Callback Hell 🔥🔥🔥
Callback hell is the situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code. 

### callbackhell.js
```javascript
import {
    searchHero
} from "./heroes.js";

//creating a callback hell 🔥🔥🔥
searchHero(0, (err, hero1) => {
    if (err) {
        console.log(err);
    }
    searchHero(1, (err, hero2) => {
        if (err) {
            console.log(err);
        }
        searchHero(2, (err, hero3) => {
            if (err) {
                console.log(err);
            } else{
                console.log(`Heroes are ${hero1.name} ${hero2.name} ${hero3.name}`);
            }
        });
    });
});
//Output: Heroes are spiderman iron man hulk
```

## 3. Promise 🤞