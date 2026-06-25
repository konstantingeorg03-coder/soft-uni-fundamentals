function convertToJSON(name, lastName, hairColor){
    let data = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    
    console.log(JSON.stringify(data));
}
convertToJSON('George', 'Jones', 'Brown');