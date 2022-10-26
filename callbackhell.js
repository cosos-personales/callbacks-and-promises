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