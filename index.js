Promise.all([1,2,3])
    .then( ([a,...arr]) => console.log(a, arr));