function signCheck(first, second, third){
    let negativeNums = 0;

    if(first < 0){
        negativeNums++;
    }
    
    if(second < 0){
        negativeNums++;
    }

    if(third < 0){
        negativeNums++;
    }

    if(negativeNums === 1 || negativeNums === 3){
        return 'Negative';
    }else{
        return 'Positive';
    }
}

let result = signCheck(5, 12, -15);

console.log(result);