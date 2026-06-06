function nxnMatrix(n){
   for(let i = 1; i <= n; i++){
    console.log(createRow(n));
   } 

   function createRow(n){
    let row = "";
    for(let j = 1; j <= n; j++){
        row += n + ' ';
    }
    return row;
   }
}
nxnMatrix(7);