function validateanswers(){
    if (textValidate() && radioValidate()){
        alert("validated");
        return true;
    } else {
        alert("validation problem!");
        return false;
    }
}

function textValidate(){
    var fullname = document.getElementById("fullname").value;
    var name = document.getElementById("name").value;

    if (fullname === ""){
        
        alert("You must enter your full name");
        return false;
    } else if (name === ""){
        alert("You must enter your name");
        return false;
    } else {
        return true;
    }   
}

function radioValidate(){
    var questionone = document.forms.quiz.elements.question1.value;
    if (questionone == "") {
        alert("You must answer question 1");
        return false;
    } else {
        return true;
    }
}

function checkanswers(){
    // grab all the elements from the quiz form, store them as quiz.
    quiz = document.forms.quiz.elements;
    var score = 0;
    if (validateanswers()) {
        // check the answers 
        // question 1
        answer1 = quiz.question1.value;
        if (answer1 === "Markup") {
            score = score + 1;
        }
        //return the score value as an alert.
        alert("Well done " + document.forms.quiz.name.value + " your score was: " + score);
    }
}
