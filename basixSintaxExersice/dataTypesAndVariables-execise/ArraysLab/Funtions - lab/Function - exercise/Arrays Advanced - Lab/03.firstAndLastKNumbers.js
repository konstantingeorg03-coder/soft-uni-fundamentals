function firstAndLastKNumbers(arr){
    let k = arr.shift();

    let firstNums = arr.slice(0, k);
    let lastNums = arr.slice(arr.length - k);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}
firstAndLastKNumbers(['2', '7', '8', '9']);