function solve(arr){
    for(let names of arr){
        let [name, longitude, latitude] = names.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let namesObj = {
            name: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        console.log(namesObj);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);