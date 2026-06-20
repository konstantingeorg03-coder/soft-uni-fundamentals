function taxCalculator(arr){
    let info = arr.shift().split('>>');
    let totalTax = 0;
    
    for(let car of info){
        let [type, years, km] = car.split(' ');
        years = Number(years);
        km = Number(km);

        let tax = 0;

        if(type === 'family'){

            tax = 50;
            tax -= years * 5;
            tax += Math.floor(km / 3000) * 12;

        }else if(type === 'heavyDuty'){

            tax = 80;
            tax -= years * 8;
            tax += Math.floor(km / 9000) * 14;

        }else if(type === 'sports'){

            tax = 100;
            tax -= years * 9;
            tax += Math.floor(km / 2000) * 18;

        }else{
            console.log('Invalid car type.');
            continue;
        }

        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTax += tax;
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);