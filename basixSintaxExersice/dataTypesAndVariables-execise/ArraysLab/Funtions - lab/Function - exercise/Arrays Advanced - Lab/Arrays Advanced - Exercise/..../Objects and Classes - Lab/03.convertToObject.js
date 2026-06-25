function convertToObject(json){
    let data = JSON.parse(json);
    
    for(let entry of Object.entries(data)){
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');