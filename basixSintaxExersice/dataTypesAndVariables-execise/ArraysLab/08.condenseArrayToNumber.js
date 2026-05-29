function condenseArrayToNumber(numbers){
    if(numbers.length === 1){
        console.log(numbers[0]);
        return; 
    }
    let result = [];

    while(true){

        for(let i = 0; i < numbers.length - 1; i++){

            let firstValue = numbers[i];

            let secondValue = numbers[i + 1];

            let sum = firstValue + secondValue;

            result.push(sum);
        }
        if(result.length === 1){
            break;
        }
        numbers = result;
        result = [];
    }
    console.log(result[0]);
}
condenseArrayToNumber([1]);