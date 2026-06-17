function memoryGame(arr) {
   let elements = arr.shift().split(' ');
   let command = arr.shift();
   let moves = 0;

   while(command !== 'end'){
    moves++;
    let [idx1, idx2] = command.split(' ').map(Number);

    if(idx1 === idx2 || idx1 < 0 || idx2 < 0 || idx1 >= elements.length || idx2 >= elements.length){
        console.log("Invalid input! Adding additional elements to the board");
        let newEl = `-${moves}a`;
        let midIdx = Math.floor(elements.length / 2);

        elements.splice(midIdx, 0, newEl, newEl);
    }else{
        if(elements[idx1] === elements[idx2]){
            let el = elements[idx1];
            console.log(`Congrats! You have found matching elements - ${el}!`);

            let minIdx = Math.min(idx1, idx2);
            let maxIdx = Math.max(idx1, idx2);

            elements.splice(maxIdx, 1);
            elements.splice(minIdx, 1);
        }else{
            console.log('Try again');
        }
    }
    command = arr.shift();
   }
   console.log('Sorry you lose :(');
   console.log(elements.join(' '));
}
memoryGame(["a 2 4 a 2 4", 
"4 0", 
"0 2",
"0 1",
"0 1", 
"end"
]);