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

//for callbacks
// export const searchHero = (id, callback) => {
//     const hero = heroes[id];
//     //We validate the data
//     if (hero) {
//         callback(null, hero);
//     } else {
//         callback(`The id: ${ id } doesn't exist`);
//     }
// }

//for promises
export const searchHero = (id) => {
    const hero = heroes[id];
    return new Promise( (resolve, reject) => {
        if(hero){
            resolve(hero);
        } else {
            reject(`Hero ${id} doesn't exist`);
        }
    });
}

