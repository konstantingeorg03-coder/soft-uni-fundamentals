function distinctArray(arr){
    let neededArr = [];

    for(let el of arr){
        if(!neededArr.includes(el)){
            neededArr.push(el);
        }
    }
    console.log(neededArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);