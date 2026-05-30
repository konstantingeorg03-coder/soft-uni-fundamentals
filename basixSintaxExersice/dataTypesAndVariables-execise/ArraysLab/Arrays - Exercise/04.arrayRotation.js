function arrayRotation(arr, rotationCount){
    for(let currentRotation = 1; currentRotation <= rotationCount; currentRotation++){

        let firstEl = arr.shift();

        arr.push(firstEl);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);