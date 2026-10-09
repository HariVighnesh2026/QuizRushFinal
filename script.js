const questions = [
  {
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    difficulty: "Easy",
    question: "Which tag is used to create a paragraph?",
    options: ["<h1>", "<p>", "<br>", "<img>"],
    answer: 1,
  },
  {
    difficulty: "Easy",
    question: "Which tag creates the largest standard heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: 2,
  },
  {
    difficulty: "Easy",
    question: "Which tag inserts a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: 2,
  },
  {
    difficulty: "Easy",
    question: "Which attribute specifies a link's destination?",
    options: ["src", "href", "alt", "targetname"],
    answer: 1,
  },
  {
    difficulty: "Easy",
    question: "Which tag is used to display an image?",
    options: ["<image>", "<picturefile>", "<img>", "<src>"],
    answer: 2,
  },
  {
    difficulty: "Easy",
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: 1,
  },
  {
    difficulty: "Easy",
    question: "Which tag defines a list item?",
    options: ["<item>", "<ul>", "<li>", "<dl>"],
    answer: 2,
  },
  {
    difficulty: "Easy",
    question: "Which element contains metadata and the page title?",
    options: ["<body>", "<main>", "<footer>", "<head>"],
    answer: 3,
  },
  {
    difficulty: "Easy",
    question: "Which declaration identifies an HTML5 document?",
    options: [
      "<html5>",
      "<!DOCTYPE html>",
      "<doctype=html>",
      "<document html>",
    ],
    answer: 1,
  },

  {
    difficulty: "Medium",
    question: "Which attribute provides alternative text for an image?",
    options: ["title", "alt", "caption", "description"],
    answer: 1,
  },
  {
    difficulty: "Medium",
    question: "Which element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<navlink>"],
    answer: 1,
  },
  {
    difficulty: "Medium",
    question: "Which input type hides the characters entered by the user?",
    options: [
      'type="hidden"',
      'type="password"',
      'type="private"',
      'type="secure"',
    ],
    answer: 1,
  },
  {
    difficulty: "Medium",
    question: "Which semantic element represents the main content of a page?",
    options: ["<section>", "<aside>", "<main>", "<summary>"],
    answer: 2,
  },
  {
    difficulty: "Medium",
    question: "Which attribute makes a form field mandatory?",
    options: ["validate", "required", "mustfill", "mandatory"],
    answer: 1,
  },
  {
    difficulty: "Medium",
    question: "Which tag associates text with a form control?",
    options: ["<caption>", "<label>", "<legend>", "<name>"],
    answer: 1,
  },
  {
    difficulty: "Medium",
    question: "Which element creates a drop-down selection list?",
    options: [
      "<optionlist>",
      "<input type='dropdown'>",
      "<select>",
      "<datalistbox>",
    ],
    answer: 2,
  },
  {
    difficulty: "Medium",
    question:
      "Which attribute opens a link in a new browsing context when set to _blank?",
    options: ["open", "window", "target", "rel"],
    answer: 2,
  },
  {
    difficulty: "Medium",
    question: "Which element groups related controls in a form?",
    options: ["<fieldset>", "<formgroup>", "<group>", "<section>"],
    answer: 0,
  },
  {
    difficulty: "Medium",
    question: "Which tag represents a table row?",
    options: ["<td>", "<th>", "<tr>", "<table-row>"],
    answer: 2,
  },

  {
    difficulty: "Hard",
    question: "Which attribute connects a label to a form control by its id?",
    options: ["name", "for", "bind", "control"],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question:
      "Which element provides scalable vector graphics directly in HTML?",
    options: ["<canvas-vector>", "<svg>", "<vector>", "<graphic>"],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question:
      "What is the purpose of the defer attribute on a classic external script?",
    options: [
      "Run it before HTML parsing begins",
      "Download it and execute after parsing, preserving document order",
      "Prevent the script from downloading",
      "Run it only when clicked",
    ],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question:
      "Which attribute can provide image candidates for responsive images?",
    options: ["srcset", "sizeset", "media-src", "responsive"],
    answer: 0,
  },

  {
    difficulty: "Hard",
    question:
      "Which element is intended for self-contained content that can be distributed independently?",
    options: ["<div>", "<article>", "<span>", "<summary>"],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question:
      "Which input attribute specifies a regular expression the value must match?",
    options: ["validate", "regex", "pattern", "match"],
    answer: 2,
  },
  {
    difficulty: "Hard",
    question: "What does the aria-label attribute primarily provide?",
    options: [
      "A visible heading automatically",
      "An accessible name for an element",
      "A CSS class name",
      "Form submission validation",
    ],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question: "Which element associates a caption with a figure?",
    options: ["<figcaption>", "<caption>", "<legend>", "<label>"],
    answer: 0,
  },
  {
    difficulty: "Hard",
    question:
      "Which attribute prevents a disabled form control's value from being submitted?",
    options: ["readonly", "disabled", "hidden", "inert"],
    answer: 1,
  },
  {
    difficulty: "Hard",
    question: "Which video attribute displays built-in playback controls?",
    options: ["buttons", "controls", "playbar", "interface"],
    answer: 1,
  },
];

let currentQuestion = 0;
let selectedAnswer = null;
let userAnswers = [];
let checkedAnswers = [];
let quizQuestions = [];

let quizMode = "casual";
let selectedDifficulty = "Medium";
let selectedQuestionCount = 5;
let selectedTimeMinutes = 10;

let timeLeft = 0;
let elapsedSeconds = 0;
let timerInterval = null;
let quizFinished = false;

const $ = (id) => document.getElementById(id);

const homePage = $("home");
const quizPage = $("quiz");
const resultPage = $("result");

const numberInput = $("number");
const plusButton = $("plus");
const minusButton = $("minus");
const startButton = $("startQuiz");

const casualButton = $("casualButton");
const timedButton = $("timedButton");

const timeOptions = $("timeOptions");
const timeButton = $("timeButton");
const timeText = $("timeText");
const timeDropdown = $("timeDropdown");

const difficultyButton = $("difficultyButton");
const difficultyText = $("difficultyText");
const difficultyDropdown = $("difficultyDropdown");

const questionTypeButton = $("questionTypeButton");
const questionTypeText = $("questionTypeText");
const questionTypeDropdown = $("questionTypeDropdown");

const questionNumber = $("questionNumber");
const questionElement = $("question");

const optionButtons = [$("optionA"), $("optionB"), $("optionC"), $("optionD")];

const nextButton = $("next");
const previousButton = $("previous");
const submitButton = $("submitquiz");
const checkAnswerButton = $("checkAnswer");

const timerElement = $("timer");
const timerLabel = document.querySelector(".timer-label");

const progressBar = $("progressBar");
const progressText = $("progressText");

function clampQuestionCount(value) {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed)) {
    return 5;
  }

  return Math.min(10, Math.max(5, parsed));
}

function updateQuestionCount(value) {
  selectedQuestionCount = clampQuestionCount(value);

  if (numberInput) {
    numberInput.value = selectedQuestionCount;
  }
}

if (numberInput && plusButton && minusButton) {
  numberInput.min = "5";
  numberInput.max = "10";
  numberInput.step = "1";

  plusButton.addEventListener("click", function (event) {
    event.preventDefault();

    const currentCount = Number(numberInput.value) || 5;
    updateQuestionCount(currentCount + 1);
  });

  minusButton.addEventListener("click", function (event) {
    event.preventDefault();

    const currentCount = Number(numberInput.value) || 5;
    updateQuestionCount(currentCount - 1);
  });

  numberInput.addEventListener("change", function () {
    updateQuestionCount(numberInput.value);
  });

  updateQuestionCount(5);
}

function closeAllDropdowns() {
  [timeDropdown, difficultyDropdown, questionTypeDropdown].forEach(
    (dropdown) => {
      if (dropdown) {
        dropdown.classList.remove("show");
      }
    },
  );

  [timeButton, difficultyButton, questionTypeButton].forEach((button) => {
    if (button) {
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function toggleDropdown(button, dropdown) {
  if (!button || !dropdown) {
    return;
  }

  const willOpen = !dropdown.classList.contains("show");

  closeAllDropdowns();

  if (willOpen) {
    dropdown.classList.add("show");
    button.setAttribute("aria-expanded", "true");
  }
}

if (timeButton) {
  timeButton.addEventListener("click", () => {
    toggleDropdown(timeButton, timeDropdown);
  });
}

if (difficultyButton) {
  difficultyButton.addEventListener("click", () => {
    toggleDropdown(difficultyButton, difficultyDropdown);
  });
}

if (questionTypeButton) {
  questionTypeButton.addEventListener("click", () => {
    toggleDropdown(questionTypeButton, questionTypeDropdown);
  });
}

if (timeDropdown) {
  timeDropdown.querySelectorAll("[data-time]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTimeMinutes = Number(button.dataset.time);

      if (timeText) {
        timeText.textContent = `${selectedTimeMinutes} minutes`;
      }

      closeAllDropdowns();
    });
  });
}

if (difficultyDropdown) {
  [
    ["easy", "Easy"],
    ["medium", "Medium"],
    ["hard", "Hard"],
  ].forEach(([id, label]) => {
    const button = $(id);

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      selectedDifficulty = label;

      if (difficultyText) {
        difficultyText.textContent = label;
      }

      closeAllDropdowns();
    });
  });
}

if (questionTypeDropdown) {
  [
    ["single", "Single Correct"],
    ["multiple", "Multiple Correct"],
  ].forEach(([id, label]) => {
    const button = $(id);

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      if (questionTypeText) {
        questionTypeText.textContent = label;
      }

      closeAllDropdowns();
    });
  });
}

function setMode(mode) {
  quizMode = mode;

  const casual = mode === "casual";

  if (casualButton) {
    casualButton.classList.toggle("selected", casual);
  }

  if (timedButton) {
    timedButton.classList.toggle("selected", !casual);
  }

  if (timeOptions) {
    timeOptions.hidden = casual;
  }

  if (checkAnswerButton) {
    checkAnswerButton.style.display = casual ? "inline-block" : "none";
  }

  if (timerLabel) {
    timerLabel.textContent = casual ? "No time limit" : "Time remaining";
  }

  if (timerElement) {
    timerElement.textContent = casual
      ? "∞"
      : `${String(selectedTimeMinutes).padStart(2, "0")}:00`;
  }
}

if (casualButton) {
  casualButton.addEventListener("click", () => {
    setMode("casual");
  });
}

if (timedButton) {
  timedButton.addEventListener("click", () => {
    setMode("timed");
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-box")) {
    closeAllDropdowns();
  }
});

if (startButton) {
  startButton.disabled = false;
}

function shuffle(array) {
  const copy = array.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function startQuiz() {
  updateQuestionCount(numberInput ? numberInput.value : selectedQuestionCount);

  if (quizMode === "timed" && !selectedTimeMinutes) {
    alert("Please choose a time limit.");
    return;
  }

  const matchingQuestions = questions.filter(
    (question) => question.difficulty === selectedDifficulty,
  );

  quizQuestions = shuffle(matchingQuestions).slice(0, selectedQuestionCount);

  if (quizQuestions.length < selectedQuestionCount) {
    alert("There are not enough questions for this difficulty level.");
    return;
  }

  currentQuestion = 0;
  selectedAnswer = null;

  userAnswers = Array(quizQuestions.length).fill(null);
  checkedAnswers = Array(quizQuestions.length).fill(false);

  quizFinished = false;
  elapsedSeconds = 0;
  timeLeft = selectedTimeMinutes * 60;

  if (homePage) {
    homePage.style.display = "none";
  }

  if (resultPage) {
    resultPage.style.display = "none";
  }

  if (quizPage) {
    quizPage.style.display = "block";
  }

  if (timerLabel) {
    timerLabel.textContent =
      quizMode === "timed" ? "Time remaining" : "No time limit";
  }

  if (checkAnswerButton) {
    checkAnswerButton.style.display =
      quizMode === "casual" ? "inline-block" : "none";
  }

  if (timerElement) {
    timerElement.textContent =
      quizMode === "timed" ? formatTime(timeLeft) : "∞";
  }

  clearInterval(timerInterval);

  loadQuestion();

  if (quizMode === "timed") {
    startTimer();
  } else {
    startElapsedClock();
  }
}

if (startButton) {
  startButton.addEventListener("click", startQuiz);
}

function loadQuestion() {
  if (!quizQuestions.length) {
    return;
  }

  const question = quizQuestions[currentQuestion];

  selectedAnswer = userAnswers[currentQuestion];

  if (questionNumber) {
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  }

  if (questionElement) {
    questionElement.textContent = question.question;
  }

  if (progressBar) {
    progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  }

  if (progressText) {
    progressText.textContent = `${currentQuestion + 1} / ${quizQuestions.length}`;
  }

  optionButtons.forEach((button, index) => {
    if (!button) {
      return;
    }

    button.classList.remove("selected", "correct", "incorrect");

    button.disabled = false;

    button.innerHTML =
      '<span class="radio"></span><span class="optionText"></span>';

    const optionText = button.querySelector(".optionText");

    if (optionText) {
      optionText.textContent = question.options[index];
    }

    if (selectedAnswer === index) {
      button.classList.add("selected");
    }
  });

  if (checkedAnswers[currentQuestion]) {
    showAnswerFeedback();
  }

  if (previousButton) {
    previousButton.style.display =
      currentQuestion === 0 ? "none" : "inline-block";
  }

  if (nextButton) {
    nextButton.textContent =
      currentQuestion === quizQuestions.length - 1
        ? "Finish →"
        : "Next Question →";
  }

  if (checkAnswerButton) {
    checkAnswerButton.disabled = checkedAnswers[currentQuestion];

    checkAnswerButton.textContent = checkedAnswers[currentQuestion]
      ? "Answer Checked"
      : "Check Answer";
  }
}

optionButtons.forEach((button, index) => {
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    if (quizFinished || checkedAnswers[currentQuestion]) {
      return;
    }

    selectedAnswer = index;
    userAnswers[currentQuestion] = index;

    optionButtons.forEach((option) => {
      if (option) {
        option.classList.remove("selected");
      }
    });

    button.classList.add("selected");
  });
});

function showAnswerFeedback() {
  const question = quizQuestions[currentQuestion];

  optionButtons.forEach((button, index) => {
    if (!button) {
      return;
    }

    button.classList.remove("correct", "incorrect");

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (
      selectedAnswer !== null &&
      index === selectedAnswer &&
      selectedAnswer !== question.answer
    ) {
      button.classList.add("incorrect");
    }

    button.disabled = true;
  });

  if (checkAnswerButton) {
    checkAnswerButton.disabled = true;
    checkAnswerButton.textContent = "Answer Checked";
  }
}

if (checkAnswerButton) {
  checkAnswerButton.addEventListener("click", () => {
    if (quizMode !== "casual" || checkedAnswers[currentQuestion]) {
      return;
    }

    if (selectedAnswer === null) {
      alert("Please select an answer first.");
      return;
    }

    checkedAnswers[currentQuestion] = true;

    showAnswerFeedback();
  });
}

function canLeaveCurrentQuestion() {
  if (quizMode === "casual" && !checkedAnswers[currentQuestion]) {
    alert(
      selectedAnswer === null
        ? "Please select an answer and click Check Answer before continuing."
        : "Please click Check Answer before continuing.",
    );

    return false;
  }

  return true;
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (!canLeaveCurrentQuestion()) {
      return;
    }

    if (currentQuestion === quizQuestions.length - 1) {
      finishQuiz();
      return;
    }

    currentQuestion++;

    loadQuestion();
  });
}

if (previousButton) {
  previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;

      loadQuestion();
    }
  });
}

if (submitButton) {
  submitButton.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to submit the quiz?");

    if (confirmed) {
      finishQuiz();
    }
  });
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);

  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;

  return (
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`
  );
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (quizFinished) {
      return;
    }

    timeLeft--;
    elapsedSeconds++;

    if (timerElement) {
      timerElement.textContent = formatTime(timeLeft);
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      alert("Time is over!");

      finishQuiz();
    }
  }, 1000);
}

function startElapsedClock() {
  clearInterval(timerInterval);

  if (timerElement) {
    timerElement.textContent = "∞";
  }

  timerInterval = setInterval(() => {
    if (!quizFinished) {
      elapsedSeconds++;
    }
  }, 1000);
}

function finishQuiz() {
  if (quizFinished || !quizQuestions.length) {
    return;
  }

  quizFinished = true;

  clearInterval(timerInterval);

  const correctCount = quizQuestions.reduce((total, question, index) => {
    return total + (userAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  const wrongCount = quizQuestions.length - correctCount;

  const percentage = Math.round((correctCount / quizQuestions.length) * 100);

  const timeTaken = elapsedSeconds;

  if (quizPage) {
    quizPage.style.display = "none";
  }

  if (homePage) {
    homePage.style.display = "none";
  }

  if (resultPage) {
    resultPage.style.display = "block";
  }

  const scoreElement = $("score");

  if (scoreElement) {
    scoreElement.textContent = `Score: ${correctCount} / ${quizQuestions.length}`;
  }

  if ($("scoreValue")) {
    $("scoreValue").textContent = `${percentage}%`;
  }

  if ($("correctAnswers")) {
    $("correctAnswers").textContent = correctCount;
  }

  if ($("wrongAnswers")) {
    $("wrongAnswers").textContent = wrongCount;
  }

  if ($("percentage")) {
    $("percentage").textContent = `${percentage}%`;
  }

  if ($("correctBreakdown")) {
    $("correctBreakdown").textContent = correctCount;
  }

  if ($("wrongBreakdown")) {
    $("wrongBreakdown").textContent = wrongCount;
  }

  if ($("correctBar")) {
    $("correctBar").style.width = `${percentage}%`;
  }

  if ($("wrongBar")) {
    $("wrongBar").style.width = `${100 - percentage}%`;
  }

  const scoreCircle = document.querySelector(".scoreCircle");

  if (scoreCircle) {
    scoreCircle.style.setProperty("--score", `${percentage}%`);
  }

  if ($("timeTaken")) {
    $("timeTaken").textContent = formatTime(timeTaken);
  }

  const message = $("resultMessage");

  if (message) {
    if (percentage === 100) {
      message.textContent = "Excellent! Perfect score!";
    } else if (percentage >= 70) {
      message.textContent = "Great work! Keep it up!";
    } else if (percentage >= 50) {
      message.textContent = "Good job! Keep learning!";
    } else {
      message.textContent = "Keep practicing. You can improve!";
    }
  }
}

const retryButton = $("retry");

if (retryButton) {
  retryButton.addEventListener("click", () => {
    clearInterval(timerInterval);

    quizFinished = false;

    if (resultPage) {
      resultPage.style.display = "none";
    }

    if (homePage) {
      homePage.style.display = "block";
    }

    if (quizPage) {
      quizPage.style.display = "none";
    }

    if (numberInput) {
      updateQuestionCount(numberInput.value);
    }

    setMode(quizMode);
  });
}

const homeButton = $("homeButton");

if (homeButton) {
  homeButton.addEventListener("click", () => {
    clearInterval(timerInterval);

    if (resultPage) {
      resultPage.style.display = "none";
    }

    if (quizPage) {
      quizPage.style.display = "none";
    }

    if (homePage) {
      homePage.style.display = "block";
    }
  });
}

updateQuestionCount(numberInput ? numberInput.value : 10);

setMode("casual");

if (homePage) {
  homePage.style.display = "block";
}

if (quizPage) {
  quizPage.style.display = "none";
}

if (resultPage) {
  resultPage.style.display = "none";
}
