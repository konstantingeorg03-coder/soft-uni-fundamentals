function processOddNumbers(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){

        if(i % 2 !== 0){
            let num = arr[i];
            let currentNum = num * 2;
            result.push(currentNum);
        }
    }

    result.reverse();
    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);