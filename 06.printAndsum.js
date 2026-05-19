function printAndsum(start, end){
    let sum = 0;
    let nums = "";
    for(let i = start; i <= end; i++){
        sum += i;
        nums += i + " ";
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}
printAndsum(5, 10);