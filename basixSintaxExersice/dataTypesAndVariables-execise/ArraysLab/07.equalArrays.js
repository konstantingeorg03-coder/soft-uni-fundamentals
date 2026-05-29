function equalArrays(arrOne, arrTwo){
    let sum = 0;

    let arrEqual = true;

    let diffIndex = -1;

    for(let i = 0; i < arrOne.length; i++){
        let firstValue = arrOne[i];

        let secondValue = arrTwo[i];

        if(firstValue === secondValue){
            sum += Number(firstValue);
        }else{
            arrEqual = false;
            diffIndex = i;
            break;
        }
    }
    if(arrEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }
}
equalArrays(['10','20','30'], ['10','20','30']);
