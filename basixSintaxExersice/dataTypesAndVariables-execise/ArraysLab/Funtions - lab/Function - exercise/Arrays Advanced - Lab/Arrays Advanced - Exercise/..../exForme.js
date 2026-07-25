function solve(arr){
    let pattern = /^(?<start>@[#]+)(?<barCode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@[#]+)$/;
    
    let count = Number(arr.shift());

    let productGroup = '';

    for(let i = 0; i < count; i++){
        let currentBarCode = arr.shift();

        let match = currentBarCode.match(pattern);

        if(match){
            let barCode = match.groups.barCode;

            let digits = barCode.match(/\d/g);

            if(digits){
                productGroup = digits.join('');
            }else{
                productGroup = '00';
            }

            console.log(`Product group: ${productGroup}`);
        }else{
            console.log('Invalid barcode');
        }
    }
}
solve(['3',
'@#FreshFisH@#',
'@###Brea0D@###',
'@##Che4s6E@##']);