function evenAndOddSubtraction(arr){
    let oddSum = 0;

    let evenSum = 0;

    for(let number of arr){
        if(number % 2 == 0){
            evenSum += number;
        }else{
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);