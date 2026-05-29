function dayOfWeek(day){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(day > 7 || day < 1){
        console.log('Invalid day!');
    }else{
        console.log(days[day - 1]);
    }
}
dayOfWeek([11]);