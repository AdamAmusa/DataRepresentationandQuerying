//Array of strings
let items = ["Work", "Study", "Assignment"]; 

//adds one item into the array
const addTask = (task) =>{
items.push(task);//adds the variable passed through the function into the array
console.log("Task '" + task + "' has been inserted!");
return items.length;
}

console.log(addTask("Sleep"));//function decleration that will delete "Laptop" from the array

//lists all the elements in the array
const listAllTasks = (task) =>{
    //loops through the entire the array and prints out all the elements
    for(i = 0; i <= items.length; i++)
    {
        console.log(items[i]);
    }
}
listAllTasks();//function decleration that will print out elements in the array

//deletes one item in the array
const deleteTasks = (task) =>{
    //loops through the array to search for the element needed to be deleted
    for(i = 0; i <= items.length; i++)
    {
        //if the string is equal to the element it will delete the element
        if(items[i] == task) 
        {
            items.splice(i, 1);//at index remove one element
        }
    
    }

    console.log("'" + task + "' has been deleted!");
    return items.length;//returns lenght of array after deletion
}

console.log(deleteTasks("Study"));//function decleration that will delete "Car" from the array
