function meetings(calls){
    let phoneCalls = {};

    for(let entry of calls){
        let splitEntry = entry.split(' ');

        [weekDay, personName] = splitEntry;

        if(phoneCalls.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
        }else{
            phoneCalls[weekDay] = personName;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for(let key in phoneCalls){
        console.log(`${key} -> ${phoneCalls[key]}`);
    }
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);