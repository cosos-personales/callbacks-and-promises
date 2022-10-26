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


export const searchHero = (id, callback) => {
    const hero = heroes[id];
    //We validate the data
    if (hero) {
        callback(null, hero);
    } else {
        callback(`The id: ${ id } doesn't exist`);
    }
}

