function sumOfOddNumbers(num){
    let sum = 0;
    
    let count = 0;

    for(let i = 1; count < num; i++){
        if(i % 2 !== 0){
            console.log(i);
            sum += i;
            count++;
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);