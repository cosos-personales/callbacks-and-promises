import {
    searchHero
} from './heroes.js';

//callback is using a function as a parameter
searchHero(1, (err, hero) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Hero is ${hero.name}`);
    }
});

//cleaner callback
const callback = (err, hero) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Hero is ${hero.name}`);
    }
}

searchHero(0, callback);