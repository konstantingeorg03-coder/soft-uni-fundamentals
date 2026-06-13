function searchForANumber(arr1, arr2){
    let [takeCount, deleteCount, searchedNum] = arr2;
    
    let reducedArr = arr1.slice(0, takeCount);
    reducedArr.splice(0, deleteCount);

    let searchedNumOccurences = reducedArr.filter(num => num === searchedNum).length;
    console.log(`Number ${searchedNum} occurs ${searchedNumOccurences} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6],
                     [5, 2, 3]);