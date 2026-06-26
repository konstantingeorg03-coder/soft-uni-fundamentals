function employees(arr){

    for(let names of arr){
        let personalNum = names.length;

        let namesArr = {
            name: names,
            personalNumber: personalNum 
        }

            console.log(`Name: ${namesArr.name} -- Personal Number: ${namesArr.personalNumber}`);

    }
} 
employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);