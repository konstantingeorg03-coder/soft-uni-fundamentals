function taxCalculator(arr){
    let vehicleChar = arr.shift().split('>>');
    let totalTax = 0;

    for(let command of vehicleChar){
        let [type, years, km] = command.split(' ');
        years = Number(years);
        km = Number(km);

        let tax = 0;

        if(type === 'family'){
            tax = 50;
            tax -= 5 * years;
            tax += Math.floor(km / 3000) * 12;

        }else if(type === 'heavyDuty'){
            tax = 80;
            tax -= 8 * years;
            tax += Math.floor(km / 9000) * 14;

        }else if(type === 'sports'){
            tax = 100;
            tax -= 9 * years;
            tax += Math.floor(km / 2000) * 18;
        }else{
            console.log('Invalid car type!');
            continue;
        }

        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTax += tax;
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])