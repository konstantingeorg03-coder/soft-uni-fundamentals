function maxSequenceOfEqualElements(arr){
    let count = 0;
    let bestCount = 0;
    let bestNum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            count++;
        }else{
            count = 1;
        }
        if(count > bestCount){
            bestCount = count;
            bestNum = arr[i];
        }
    }
    let result = [];
    for(let i = 0; i < bestCount; i++){
        result.push(bestNum);
    }
    console.log(result.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);