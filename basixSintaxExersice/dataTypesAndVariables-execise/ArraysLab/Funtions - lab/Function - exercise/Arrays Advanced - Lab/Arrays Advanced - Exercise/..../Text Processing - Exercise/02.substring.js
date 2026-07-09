function solve(text, searchWord){
    text = text.replaceAll('!', ' ');
    text = text.replaceAll('?', ' ');
    text = text.replaceAll('.', ' ');
    text = text.replaceAll(',', ' ');
    text = text.replaceAll(';', ' ');
    text = text.replaceAll(':', ' ');

    let splitText = text.split(' ');

    let count = 0;

    for(let element of splitText){
        if(element === searchWord){
            count++;
        }
    }

    console.log(count);
}
solve('This is a word and it also is a sentence',
'is');