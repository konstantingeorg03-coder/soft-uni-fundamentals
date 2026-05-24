function amazingNumbers(num){
    let sum = 0;

    num = num.toString();

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');

    console.log(`${sum} Amazing? ${result ? 'True' : 'False'}`);
}
amazingNumbers(1233);``