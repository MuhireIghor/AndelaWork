const questions = [
    {
        number:1,
        question:"How old was Jesus Christ ?",
        answers:[
            12,13,55,76
        ]
    },
    {
        number:2,
        question:"What was the name of the mother of Jesus ?",
        answers:[
            "Mary","Catheline","All of the Above","No answer"
        ]
    },
    {
        number:3,
        question:"In which country was Jesus Christ born in ?",
        answers:[
            "Egypt","Israel","Kenya","Jordan"
        ]
    },
    {
        number:4,
        question:"Who was the father of Jesus ?",
        answers:[
            "None of the Above","Simon","Judas","Joseph"
        ]
    },
    {
        number:4,
        question:"How many disciples did Jesus have?",
        answers:[
            12,9,10,72
        ]
    }
]   


const container2 = document.getElementsByClassName("answers");

    var template = document.createElement("div");
    var index2 = 0;
 const handleClick =()=>{
var index = index2-1;
console.log(index);
 }
 const handleNext=()=>{
var index = index2+1;
console.log(index);
 }

        template.innerHTML = `
        <div class='option'>
        <p class='class1'>Question ${questions[index].number}</p>
        <p id=${index}>${questions[index].question}</p>
        </div>
        <div class='answer'>

        <p>${questions[index].answers[0]}</p>
        <p>${questions[index].answers[1]}</p>
        <p>${questions[index].answers[2]}</p>
        <p>${questions[index].answers[3]}</p>
        </div> `
            container2[0].appendChild(template);
        





