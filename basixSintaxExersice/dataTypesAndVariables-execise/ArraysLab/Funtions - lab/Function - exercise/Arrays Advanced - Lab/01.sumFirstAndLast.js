function sumFirstandLast(arr){

    let first = arr[0];
    let last = arr[arr.length - 1];

    let firstNum = Number(first);
    let lastNum = Number(last);

    console.log(firstNum + lastNum);
}
sumFirstandLast(['20', '30', '40']);