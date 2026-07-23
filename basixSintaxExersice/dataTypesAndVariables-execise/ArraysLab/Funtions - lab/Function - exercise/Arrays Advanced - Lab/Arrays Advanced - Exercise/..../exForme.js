function solve(arr){
    let pattern = /^@[#]+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+$/;

    let count = Number(arr.shift());

    let productGroup = '';
    for(let currentCode = 0; currentCode < count; currentCode++){
        let currentBarCode = arr.shift();

        let match = currentBarCode.match(pattern);

        if(match){
            let usedBarCode = match.groups.barcode;

            let codeDigits = usedBarCode.match(/\d/g);

            productGroup = codeDigits ? codeDigits.join('') : '00';
        }else{
            productGroup = '00';
        }

        console.log(`Product group: ${productGroup}`);

    }
}
solve([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);