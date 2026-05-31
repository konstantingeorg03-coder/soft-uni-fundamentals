function magicSum(arr, number){
    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];

        for(let j = i + 1; j < arr.length; j++){
            let secondNum = arr[j];
             if(currentNum + secondNum === number){
        console.log(currentNum, secondNum);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
8);