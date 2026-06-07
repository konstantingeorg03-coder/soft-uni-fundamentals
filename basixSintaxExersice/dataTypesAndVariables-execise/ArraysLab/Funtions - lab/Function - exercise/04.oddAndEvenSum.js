function oddAndEvenSum(num){
   let oddSum = 0;
   let evenSum = 0;

   num = String(num);

   for(let number of num){
    let currentNum = Number(number);
    if(number % 2 === 0){
        evenSum += currentNum;
    }else{
        oddSum += currentNum;
    }
   }
   
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);