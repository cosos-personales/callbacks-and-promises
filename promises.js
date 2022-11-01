import { searchHero } from "./heroes.js";

//Readble code 📚
searchHero(1)
    .then( data => console.log(`Hero is ${ data.name }`))
    .catch( err => console.error(err))
//Output: Hero is iron man

//No callback hell 🤌🤌
//With Promises.all()
Promise.all([searchHero(1), searchHero(2)])
    .then( ([hero1, hero2]) => console.log(`${hero1.name} and ${hero2.name}`))
    .catch(err => console.log(err))
     //finally is a method that always executed
    .finally( () => console.log(`that's all folks 🐰`) )
    //Output: iron man and hulk
    //        that's all folks 🐰

