function adressBook(arr){
    let data = {};

    for(let entry of arr){
        let splitEntry = entry.split(':');

        [firstName, adress] = splitEntry;

        data[firstName] = adress;
    }
    let adressBookEntries = Object.entries(data);

        adressBookEntries.sort((first, second) => {
            let firstKey = first[0];
            let secondKey = second[0];

            return firstKey.localeCompare(secondKey);
        });

    for(let [firstName, adress] of adressBookEntries){
        console.log(`${firstName} -> ${adress}`);
    }
}
adressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']);