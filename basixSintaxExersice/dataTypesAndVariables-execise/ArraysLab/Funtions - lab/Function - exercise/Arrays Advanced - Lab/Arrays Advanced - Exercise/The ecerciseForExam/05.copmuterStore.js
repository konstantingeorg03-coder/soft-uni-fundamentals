function computerStore(arr) {
    let price = arr.shift();
    let totalPrice = 0;

    while (price !== 'special' && price !== 'regular') {

        price = Number(price);

        if (price <= 0) {
            console.log('Invalid price!');
        } else {
            totalPrice += price;
        }

        price = arr.shift();
    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
        return;
    }

    let taxes = totalPrice * 0.20;
    let finalPrice = totalPrice + taxes;

    if (price === 'special') {
        finalPrice *= 0.90;
    }

    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${finalPrice.toFixed(2)}$`);
}
computerStore([1050,
200,
450,
2,
18.50, 
16.86,
'special']);