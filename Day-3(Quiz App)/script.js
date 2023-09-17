const question = [
  {
    que: "Which of the following is a markup Language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What Year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What Does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Coscading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  submitQuiz();
});

const submitQuiz = () => {
  const data = question[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById(
    "box"
  ).innerHTML = `<h3>Thank You for playing the Quiz</h3>
   <h2>${right} / ${total} are Correct</h2>`;
};

loadQuestion();
