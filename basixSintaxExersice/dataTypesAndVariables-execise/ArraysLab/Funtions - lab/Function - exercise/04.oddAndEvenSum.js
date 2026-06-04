function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;

    let numAsString = String(num);

    for(let char of numAsString){
        let digitNum = Number(char);

        if(char % 2 === 0){
            evenSum += digitNum;
        }else{
            oddSum += digitNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);