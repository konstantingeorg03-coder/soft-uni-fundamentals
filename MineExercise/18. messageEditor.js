function solve(arr) {
    let text = arr.shift();

    let command = arr.shift();

    while (command !== 'Finish') {
        let tokens = command.split('|');

        let action = tokens[0];

        if (action === 'Extract') {
            let pattern = tokens[1];

            let regex = new RegExp(pattern);

            if (regex.test(text)) {
                console.log(`Found: ${pattern}`);
            } else {
                console.log('Pattern not found!');
            }

        } else if (action === 'Mask') {
            let word = tokens[1];

            let regex = new RegExp(word, 'g');

            let replacement = '*'.repeat(word.length);

            text = text.replaceAll(regex, replacement);

            console.log(text);

        } else if (action === 'Swap') {
            let word1 = tokens[1];

            let word2 = tokens[2];

            let temp = '###TEMP###';

            text = text.replaceAll(word1, temp);
            text = text.replaceAll(word2, word1);
            text = text.replaceAll(temp, word2);

            console.log(text);

        } else if (action === 'RemoveDigits') {
            let digits = /\d/g;

            text = text.replaceAll(digits, '');

            console.log(text);

        } else if (action === 'CountWords') {
            let pattern = /[A-Za-z]+/g;

            let match = text.match(pattern);

            let count = 0;

            if (match) {
                count = match.length;
            }

            console.log(`Words found: ${count}`);

        } else if (action === 'ReverseMatch') {
            let pattern = tokens[1];

            if (text.includes(pattern)) {
                let index = text.indexOf(pattern);

                let part = text.substring(index, index + pattern.length);

                part = part.split('').reverse().join('');

                let first = text.substring(0, index);
                let second = text.substring(index + pattern.length);

                text = first + part + second;

                console.log(text);
            } else {
                console.log('Word not found!');
            }
        }

        command = arr.shift();
    }

    console.log(`Final message: ${text}`);
}
solve([
    'Alpha123secretCode-Beta99secret',
    'Extract|secret',
    'Mask|secret',
    'RemoveDigits',
    'CountWords',
    'Swap|Alpha|Beta',
    'ReverseMatch|Code',
    'Extract|Gamma',
    'Finish'
]);