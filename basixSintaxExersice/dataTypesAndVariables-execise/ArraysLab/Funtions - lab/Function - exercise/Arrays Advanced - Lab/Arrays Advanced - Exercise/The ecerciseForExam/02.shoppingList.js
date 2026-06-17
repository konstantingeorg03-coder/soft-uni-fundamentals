function shoppingList(arr){
    let list = arr.shift().split('!');
    let command = arr.shift();
    
    while(command !== 'Go Shopping!'){
        let [action, item, newItem] = command.split(' ');

        if(action === 'Urgent'){ 

            if(!list.includes(item)){
                list.unshift(item); 
            }

        }else if(action === 'Unnecessary'){

            let idx =  list.indexOf(item);
            if(idx !== -1){
                list.splice(idx, 1); 
            }

        }else if(action === 'Correct'){

            let idx = list.indexOf(item);
            if(idx !== -1){
                list.splice(idx, 1, newItem);
            }

        }else if(action === 'Rearrange'){
            
            let idx = list.indexOf(item);
            if(idx !== -1){
                list.splice(idx, 1);
                list.push(item);
            }
        }

        command = arr.shift();
    }

    console.log(list.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);