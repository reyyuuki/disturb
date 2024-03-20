let question = document.getElementById("question");
let option = document.getElementById("option");
let result = document.getElementById("result");

function startgame(questions,options){

    for(var i = 0; i<2; i++){
        question.textContent = questions[i];
        option.innerHtML += `<p> ${options[i][i]} </p>`;
    }
}

let questions = [
            "Q1.which language do you use for this programme?",
            "Q2.which year does c++ invented?"
];

let options = [
           ["A.JS", "B.C++","C.HTML", "D.PYTHON"],
           ["A.JSe", "B.C++e","C.HTMLe", "D.PYTHONe"]
];

startgame(questions,options);