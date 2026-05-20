function amazingNumbers(num){
    let sum = 0;
    let numberAsString = num.toString();
    
    for(let i = 0; i < numberAsString.length; i++){
        sum += Number(numberAsString[i]);
    }
    let isAmazing = sum.toString().includes('9');

    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'} `);
}
amazingNumbers(1233);