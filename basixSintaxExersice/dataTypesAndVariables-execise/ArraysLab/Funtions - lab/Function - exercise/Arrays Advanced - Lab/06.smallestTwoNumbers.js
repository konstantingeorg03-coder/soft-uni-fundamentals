function smallestTwoNumbers(arr){
    arr.sort((a, b) => a - b);

    let smallest = arr.slice(0, 2);

    console.log(smallest.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);