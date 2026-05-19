function leapYear(yearNum){
    if((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0){
        console.log('yes');
    }else{
        console.log('no');
    }
}
leapYear(1984);
