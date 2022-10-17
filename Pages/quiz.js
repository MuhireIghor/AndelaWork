const proclaim = document.getElementsByClassName('ansRev');
var index = 0;
var answer = false;
var checkt = null;
var marks = 0;


const questions = [
    {
        number: 1,
        question: "How old was Jesus Christ ?",
        answers: [
            12, 33, 55, 76
        ],
        realAnswer:33
    },
    {
        number: 2,
        question: "What was the name of the mother of Jesus ?",
        answers: [
            "Mary", "Catheline", "All of the Above", "No answer"
        ],
        realAnswer:"Mary"
    },
    {
        number: 3,
        question: "In which country was Jesus Christ born in ?",
        answers: [
            "Egypt", "Israel", "Kenya", "Jordan"
        ],
        realAnswer:"Jordan"
    },
    {
        number: 4,
        question: "Who was the father of Jesus ?",
        answers: [
            "None of the Above", "Simon", "Judas", "Joseph"
        ],
        realAnswer:"Joseph"
    },
    {
        number: 5,
        question: "How many disciples did Jesus have?",
        answers: [
            12, 9, 10, 72
        ],
        realAnswer:12
    }
]
const next = document.getElementById("next");
const showAns = document.getElementsByName("choice");


var toggleOpt=false;
// showAns.value = toggleOpt;
// console.log(showAns.value);

const handleToogle= ()=>{
    toggleOpt =!toggleOpt;
    showAns.checked = toggleOpt;
    console.log(showAns.checked );
    if(toggleOpt===false){
        showAns.checked == false;
    }
    
    changement();
}



const handleDisable = ()=>{
    
    next.disabled = index===questions.length-1?true:false;
    prev.disabled = index < 0 ?true:false;
    
    
    if(next.disabled == true || index>0){
        next.style.backgroundColor = "gray";
        prev.style.backgroundColor = "black";
        
    }else if(prev.disabled == true ){
        next.style.backgroundColor = "black";
        prev.style.backgroundColor = "gray";    }
    }
    next.onclick = () => {
        
        index += 1;
        changement();
        handleDisable();
    }
    const prev = document.getElementById("prev");
    prev.onclick = () => {
        index -= 1;
        changement();
        handleDisable();
    }
    const handleChange = ()=>{
        
        let radValue = document.getElementsByName("answer");
        console.log(radValue);
        console.log(radValue.length);
        for(let j=0;j<radValue.length;j++){
            if(radValue[j].checked){
                console.log(radValue[j]);
                for(let s=0;s<questions.length;s++){
                    if(questions[s].realAnswer == radValue[j].value){
                        console.log("The answer is correct");
                        marks+=5;
                        console.log(marks);
                    }else{
                        
                        marks+=0;
                        console.log(marks);
                    }
                };
            }
            
            
        }
        
    }
    const handleSubmit = ()=>{
        const finalRes = marks ;
        console.log(finalRes);
        setTimeout(()=>{
            proclaim.classlist.add("proclaim")

        },3000)


        changement();

    }
    const changement = () => {
    const container = document.getElementById("div");
container.innerHTML = `
<div class="questionIntro">
<p><span>Question</span> ${questions[index].number} :</p>
<p>${questions[index].question}</p>
</div>
<div class="ansOpt">
<div class="ansBlock">
<input type="radio" value="${questions[index].answers[0]}" name="answer" onClick="handleChange()"    />
<p>${questions[index].answers[0]}</p>
</div>
<div class="ansBlock">
<input type="radio" value="${questions[index].answers[1]}" name="answer" onClick="handleChange()"    />
<p>${questions[index].answers[1]}</p>
</div>
<div class="ansBlock">
<input type="radio"  value="${questions[index].answers[2]}" name = "answer" onClick="handleChange()"    />
<p>${questions[index].answers[2]}</p>
</div>
<div class="ansBlock">
<input type="radio"value="${questions[index].answers[3]}" name = "answer" onClick="handleChange()"    />
<p>${questions[index].answers[3]}</p>
</div>
<p class =${toggleOpt == true?"show":"hide"}>${questions[index].realAnswer}</p>

</div>
`

}
changement()

console.log(proclaim);
