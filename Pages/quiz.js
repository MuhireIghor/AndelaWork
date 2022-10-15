var value=false;
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
const handleChange = ()=>{
value=!value;
console.log(value);
}
const question1 = document.createElement("div");
const question2 = document.createElement("div");
const question3 = document.createElement("div");
const question4 = document.createElement("div");
const question5= document.createElement("div");

const container2 = document.getElementsByClassName("answers");
// questions.map((question,index)=>{
//     question1.innerHTML = `<p >${question.question}</p>
//     <div class='option' id=${index}>
//     <input type='checkbox' value=${value} onClick=${handleChange()} />  
//     <p >${question.answers[0]}</p>
//     </div>
//     <div class='option'>
//     <input type='checkbox' value=${value} onClick=${handleChange()}/>
//     <p>${question.answers[1]}</p>
//     </div>
//     <div class='option'>
//     <input type='checkbox' value=${value} onClick=${handleChange()} />
//     <p>${question.answers[2]}</p>
//     </div>
//     <div class='option'>
//     <input type='checkbox' value=${value} onClick=${handleChange()}  />
//     <p>${question.answers[3]}</p>
//     </div>

//     `

// })
    // question2.innerHTML = `<p>Question 1</p>`
    // question3.innerHTML = `<p>Question 1</p>`
    // question4.innerHTML = `<p>Question 1</p>`
    // question5.innerHTML = `<p>Question 1</p>`

    var template = document.createElement("div");
    questions.map((question,index)=>{
        template.innerHTML = `<p id=${index}>${question.question}</p>
        <p>${}</p>
        
        `

    })
    

console.log(Object.values(container2));

    
    container2[0].appendChild(template);
    // container2[i].appendChild(question2);
    // container2[i].appendChild(question3);
    // container2[i].appendChild(question4);
    // container2[i].appendChild(question5);




