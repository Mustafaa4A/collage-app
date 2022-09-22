//qustions
let Questions = [
  {
    question: "The HTML and HTTP standard are defined by ____",
    a: "Web client",
    b: "Internet association",
    c: "WWW consortium",
    d: "WWW",
    correct: "c",
  },
  {
    question: "The tag used to add images to the HTML document is ____",
    a: "<FONT>",
    b: "<HR>",
    c: "<HI>",
    d: "<IMG>",
    correct: "d",
  },
  {
    question:
      "Which tag is used to display text in title bar of a web document?",
    a: "Title Tag",
    b: "P Tag",
    c: "Meta Tage",
    d: "Header Tag",
    correct: "a",
  },
  {
    question: "What is the abbreviation of HTTP?",
    a: "Hyper Text Transform Protocol",
    b: "HTML Technology Transform Programming",
    c: "Hyper Text Transfer Program",
    d: "Hyper Text Transfer Protocol",
    correct: "d",
  },
  {
    question:
      "____ is used to store the data within the documents on the server.",
    a: "XML",
    b: "HTML",
    c: "HTML5",
    d: "HTTP",
    correct: "a",
  },
  {
    question:
      "The ____ passes the information given by the user to a specified program.",
    a: "User",
    b: "Web server",
    c: "Programmer",
    d: "Browser",
    correct: "b",
  },
  {
    question: "Which of the following statements is/are TRUE about DOM?",
    a: "W3C standard",
    b: "Each page can have multiple Document objects",
    c: "form elements can be accessed using the form object",
    d: "Both A and C",
    correct: "d",
  },
  {
    question:
      "The __________   will return only the first matching element or null when no element matches.",
    a: "document.querySelectorAll",
    b: "document.className",
    c: "document.querySelector",
    d: "None of these",
    correct: "c",
  },
  {
    question: "What is the full form DOM?",
    a: "Document Object Model",
    b: "Document Onhalt Model",
    c: "Document Oriented Management",
    d: "Document Oriented Model",
    correct: "a",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "Onclick.",
    b: "Onmouseover.",
    c: "Onmouseenter",
    d: "Onblur",
    correct: "a",
  },
];

// Model pages
let startBtn = document.getElementById("start"),
  closeBtn = document.getElementById("close"),
  FormPage = document.getElementById("model1"),
  QuizePage = document.getElementById("model2"),
  CertPage = document.getElementById("model3"),
  submit = document.getElementById("submit"),
  so = document.getElementById("so"),
  cert = document.getElementById("certification");

//opening form page
startBtn.addEventListener("click", function (e) {
  FormPage.style.display = "flex";
  // history.pushState({name='sing up'}, '', 'page')
  e.preventDefault();
});

//closing form page
closeBtn.addEventListener("click", function () {
  FormPage.style.display = "none";
});

//form submiting
let Name = document.getElementById("name"),
  address = document.getElementById("address"),
  gender = document.getElementById("gender"),
  email = document.getElementById("email");

submit.addEventListener("click", function (e) {
  if (
    Name.value != "" &&
    address.value != "" &&
    gender.value != "" &&
    email.value != ""
  ) {
    ready();
  }
  if (Name.value == "") {
    showError(Name, "Full Name cannot be blank");
    setTimeout("hideError(Name)", 2000);
  }
  if (address.value == "") {
    showError(address, "Address cannot be blank");
    setTimeout("hideError(address)", 2000);
  }
  if (gender.value == "") {
    showError(gender, "Gender cannot be blank");
    setTimeout("hideError(gender)", 2000);
  }
  if (email.value == "") {
    showError(email, "Email cannot be blank");
    setTimeout("hideError(email)", 2000);
  }

  e.preventDefault();
});

//get starting the user
function ready() {
  let seconds = 10;
  so.innerHTML = `<h1 style="font-size:50px">Get ready</h1>`;
  so.classList.add("ready");
  let Ready = setInterval(function () {
    so.innerHTML = `<h1 style="font-size:50px">${seconds}</h1>`;
    if (seconds < 0) {
      clearInterval(Ready);
      FormPage.style.display = "none";
      QuizePage.style.display = "flex";
    }
    seconds--;
  }, 1000);
}

//showing errors
function showError(input, message) {
  let formControl = input.parentElement,
    small = formControl.querySelector("small");

  input.style.border = "1px solid red";
  small.style.display = "block";
  small.textContent = message;
}

//hidding errors
function hideError(input) {
  let formControl = input.parentElement,
    small = formControl.querySelector("small");

  input.style.border = "1px solid #333";
  small.style.display = "none";
}

//inserting questions into the html page
const Next = document.getElementById("submitBtn");

const question = document.getElementById("question"),
  queNumber = document.getElementById("que-number");

const a_text = document.getElementById("a_text"),
  b_text = document.getElementById("b_text"),
  c_text = document.getElementById("c_text"),
  d_text = document.getElementById("d_text");

let questionNumber = 1,
  currentQuestion = 0,
  score = 0;

quizeLoading();

function quizeLoading() {
  queNumber.textContent = questionNumber;
  question.textContent = Questions[currentQuestion].question;
  a_text.textContent = Questions[currentQuestion].a;
  b_text.textContent = Questions[currentQuestion].b;
  c_text.textContent = Questions[currentQuestion].c;
  d_text.textContent = Questions[currentQuestion].d;
}

//timing
var secs = 0;
setInterval(function () {
  if (QuizePage.style.display == "flex") {
    let sec = document.querySelector(".sec");

    sec.style.width = secs + "%";

    secs = secs > 100 ? 0 : secs;
    secs += 4;
    if (secs > 100) {
      setTimeout(SubmitAnswer, 1500);
    }
  }
}, 1500);

//Seslected Answer
function SelectedAnswer() {
  let answers = document.getElementsByClassName("answer");
  for (let ans of answers) {
    if (ans.checked) {
      return ans.id;
    }
  }
  return undefined;
}

//uncheck the answer
function DeSelectAnswer() {
  let answers = document.getElementsByClassName("answer");
  for (let ans of answers) {
    ans.checked = false;
  }
}
//next question
Next.addEventListener("click", SubmitAnswer);

function SubmitAnswer() {
  const answer = SelectedAnswer();
  score = answer == Questions[currentQuestion].correct ? (score += 10) : score;

  secs = 0;
  questionNumber++;
  currentQuestion++;
  if (currentQuestion < Questions.length) {
    DeSelectAnswer();
    quizeLoading();
  } else {
    Congrates();
  }
}

//Congrates funtion
function Congrates() {
  QuizePage.style.display = "none";
  FormPage.style.display = "flex";

  //creating elements
  let h1 = document.createElement("h1"),
    btn = document.createElement("button"),
    btn2 = document.createElement("button");

  //creating new elements
  h1.innerHTML = "Congragulation! You Finished the Quize";

  btn.innerHTML = "Get The Result";
  btn.style.width = "200px";

  btn2.innerHTML = "Try again";
  btn2.style.width = "200px";
  btn2.style.background = "blue";

  so.innerHTML = "";
  so.append(h1);
  so.append(btn);
  so.append(btn2);
  so.classList.add("ready");

  btn.addEventListener("click", result);
  btn2.addEventListener("click", TryAgain);
}

//Getting the result
function result() {
  const name = document.getElementById("name"),
    totalQue = document.getElementById("total-que"),
    maxAvg = document.getElementById("max-avg"),
    correct = document.getElementById("correct"),
    incorrect = document.getElementById("incorrect"),
    average = document.getElementById("average");

  let Pname = Name.value,
    Pgender = gender.value;
  (totalQuestions = Questions.length),
    (maXavg = 100),
    (corrected = score / 10),
    (incorrected = totalQuestions - corrected),
    (totalAverage = score.toString() + "%");

  Pname = Pgender == "Male" ? "Mr. " + Pname : "Ms. " + Pname;

  // Assigning
  name.innerHTML = Pname;
  totalQue.innerHTML = totalQuestions;
  maxAvg.innerHTML = maXavg;
  correct.innerHTML = corrected;
  incorrect.innerHTML = incorrected;
  average.innerHTML = totalAverage;

  //
  CertPage.style.display = "flex";
  FormPage.style.display = "none";
}

//Try again
function TryAgain() {
  location.reload();
}

//closong result page
let close2 = document.getElementById("close2");
close2.addEventListener("click", function () {
  CertPage.style.display = "none";
});
