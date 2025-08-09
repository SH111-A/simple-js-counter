// document.body.innerHTML //manupulate html content(DOM manipulation)
// = "<h1>Hello, World!</h1>"+"<p>This is a simple HTML page.</p>";

let count = 1;
// Function to increase the count
function increase(){
    count++;
    document.getElementById("ctr_data").innerHTML=count;
} 

// Function to decrease the count
function decrease(){
    if (count >= 1) { // Ensure count does not go below 1    
    count--;
    document.getElementById("ctr_data").innerHTML=count;
} }