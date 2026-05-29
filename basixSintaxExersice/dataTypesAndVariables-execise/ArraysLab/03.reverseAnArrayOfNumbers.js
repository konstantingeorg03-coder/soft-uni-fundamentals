function reverseAnArrayOfNumbers(n, array){
    let arrInput = [];

    for(let i = 0; i < n; i++){
        arrInput.push(array[i]);
    }
    arrInput.reverse();
    console.log(arrInput.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);