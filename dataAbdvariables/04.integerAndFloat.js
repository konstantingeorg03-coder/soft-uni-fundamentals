function integerandFloat(first, second, third){
    let sum = first + second + third;

    if(sum % 1 === 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}
integerandFloat(200, 202, 303);