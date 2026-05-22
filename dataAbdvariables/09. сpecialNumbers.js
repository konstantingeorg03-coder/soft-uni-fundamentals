function specialNumbers(n){
    for(let i = 1; i <= n; i++){
        let sum = 0;

        let numberAsString = String(i);

        for(let j = 0; j < numberAsString.length; j++){
            let currentDigit = numberAsString[j];
            sum += Number(currentDigit);
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(15);