function solve(arr){
    let countCodes = Number(arr.shift());

    let pattern = /^@@(?<word>[A-Za-z]{3,})##(?<digits>\d{2,})!!$/;
    
    for(let i = 0; i < countCodes; i++){
        let match = arr[i].match(pattern);

        if(match){
            let word = match.groups.word;

            let digits = match.groups.digits;

            let sum = 0;

            for(let digit of digits){
                sum += Number(digit);
            }

            console.log(`Code: ${word}`);

            console.log(`Security level: ${sum}`);
            
        }else{
            console.log('Invalid code!');
        }
    }
}
solve([
    '5',
    '@@Hello##45!!',
    '@@SecretCode##1234!!',
    '@@Hi##55!!',
    '@@Test##A5!!',
    '@@abc##99!!'
]);