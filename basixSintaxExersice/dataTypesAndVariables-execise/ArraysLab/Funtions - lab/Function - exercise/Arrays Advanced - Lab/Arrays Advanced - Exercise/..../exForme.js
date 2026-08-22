function solve(arr){
    let barcodescount = Number(arr.shift());

    let pattern = /^@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+$/;

    for(let bar = 0; bar < barcodescount; bar++){
        let barcode = arr.shift();

        let match = barcode.match(pattern);

        if(match === null){
            console.log('Invalid barcode');
        }else{
            let product = match.groups.product;

            let digits = /\d/g;

            let digitMatch = product.match(digits);

            if(digitMatch === null){
                console.log('Product group: 00');
            }else{
                console.log(`Product group: ${digitMatch.join('')}`);
            }
        }
    }
}
solve(['3',
'@#FreshFisH@#',
'@###Brea0D@###',
'@##Che4s6E@##']);