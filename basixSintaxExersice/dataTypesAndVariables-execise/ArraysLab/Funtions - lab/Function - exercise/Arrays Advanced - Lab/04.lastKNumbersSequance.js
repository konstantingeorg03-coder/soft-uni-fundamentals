function lastKNumbersSequance(firstNum, secondNum){
    let result = [1];

    for(let i = 1; i < firstNum; i++){
        let startIndex = i - secondNum;

        if(startIndex < 0){
            startIndex = 0;
        }

        let previousThreeNumbers = result.slice(startIndex, i);

        let sum = 0;

        for(let number of previousThreeNumbers){
            sum += number;
        }
        result[i] = sum;
    }
    console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);