function solve(file){
    let splitFile = file.split('\\');
    
    let usedFile = splitFile.pop();

    let lastIndexDod = usedFile.lastIndexOf('.');

    let fileName = usedFile.substring(0, lastIndexDod);

    let fileExt = usedFile.substring(lastIndexDod + 1);

    console.log(`File name: ${fileName}`);
    
    console.log(`File extension: ${fileExt}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')