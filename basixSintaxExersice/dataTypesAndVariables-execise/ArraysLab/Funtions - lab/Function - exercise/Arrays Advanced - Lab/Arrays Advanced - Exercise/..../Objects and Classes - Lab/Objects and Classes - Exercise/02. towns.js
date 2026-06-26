function towns(arr){
    for(townStr of arr){
        let [name, latitude, longitude] = townStr.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let cityObj = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2),
        }
        console.log(cityObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])