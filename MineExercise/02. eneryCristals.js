function solve(arr){
    let cristalsValue = arr[0].split(' ').map(Number);

    let energy = Number(arr[1]);

    let energySum = 0;

    for(let i = 0; i < cristalsValue.length; i++){
        if(cristalsValue[i] % 2 === 0){
            energySum += cristalsValue[i];
        }else{
            cristalsValue[i] = Math.floor(cristalsValue[i] / 10);

            energySum += cristalsValue[i];
        }

        if(energySum >= energy){
            break;
        }
    }

    console.log(`Mission completed! Energy: ${energySum}`);
}
solve([
    '40 25 60 15 30',
    '100'
]);