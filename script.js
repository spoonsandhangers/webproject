// returns a random colour from the list colours
function change_colour(){
    // creates an array of colours
    // Javascript arrays are usually declared as contants
    const colours =["red", "purple", "green", "blue"]; 
   // assigns a random number between 0 and the length of the array -1.
    i = Math.floor(Math.random() * (colours.length)); 
    // returns a random colour from the array
    // using the random number generated.
    return colours[i];
}

// changes the colour of the text of the heading with the 
// id "heading"
function change_heading(){
    document.getElementById("heading").style.color = change_colour();
}

// add comment here to describe the operation of the function.
function killswitch(){
    document.getElementById("body").remove();
  }

// add comment here to describe the operation of the function.
function hi_there(){
    var name = document.getElementById("username").value;
    if (name.length < 1){
        document.getElementById("welcome").innerHTML = "";
    }
    else{
        document.getElementById("welcome").innerHTML = "<h2>Welcome to the page " + name + "</h2>";
    }
}

function another_button(){
    if (document.getElementById("extrabutton").style.display === 'none'){
        document.getElementById("extrabutton").style.display = 'block';
    } else {
        document.getElementById("extrabutton").style.display = 'none';
    }
}

function backgroundchange(){
    document.getElementById("body").style.backgroundColor = change_colour();
}
var count = 0;
function countclicks(){
    count++
    console.log(count);
}

// add comment here to describe the operation of the function.
function hello_goodbye(){
    if (document.getElementById("hello").style.display === 'none'){
            document.getElementById("hello").style.display = 'block';
    }
    else{
        document.getElementById("hello").style.display = 'none';
    }



}
  