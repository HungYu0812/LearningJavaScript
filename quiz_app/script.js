const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '14',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
    },{
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Uncle Mcdonald',
        d: 'Ivan Saldano',
        correct: 'b'
    },{
        question: 'What does the HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style sheet',
        c: 'Jason Object Notation',
        d: 'HOW BOM BOM',
        correct: 'a'
    },{
        question: 'What year was Javascript lauched?',
        a: '1994',
        b: '1995',
        c: '1996s',
        d: 'none of above',
        correct: 'd'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselctAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',()=>{    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML= `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onClick="location.reload()">Reload</button>
            `;  
        }
    }
})

