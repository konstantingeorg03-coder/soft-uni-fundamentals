function solve(arr){
    let pattern = /^(?<start>@[#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@[#]+)$/;

    let countBarCodes = Number(arr.shift());

    for(let currentCode = 0; currentCode < countBarCodes; currentCode++){
        let usedCode = arr.shift();

        let match = usedCode.match(pattern);

        if(match){
            let barcode = match.groups.barcode;

            let digits = barcode.match(/\d/g);

            if(digits){
                let productDigits = digits.join('');
            }else{
                product = '00';
            }
            console.log(`Product group: ${product}`);
        }
    }

}
solve(['3',
'@#FreshFisH@#',
'@###Brea0D@###',
'@##Che4s6E@##']);