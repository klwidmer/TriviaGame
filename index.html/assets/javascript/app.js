

  $("#HTMLQuestions").click(startHTMLCounter)
  $("#CSSQuestions").click(startCSSCounter)
  // $("#javaScriptQuestions").click(startjavaScriptCounter)
  // $("#jqueryQuestions").click(startJqueryCounter)
  // var correct;
  // var incorrect;
  // var unAnswered;

  var timer;
  var startTime = 60;
 
  var CSSQuestCnt = CSSQuestions.length;

  function startHTMLCounter(){
    loadHTMLQuestions();
    $("#seconds").text(startTime);
    timer = setTimeout(countDown, 1000);
    // $("#DisplayQuestions").append($("javaScriptQuestions"));
    
    function countDown()
    {
        if (startTime > 0)
        {
           $("#seconds").text(--startTime);
           timer = setTimeout(countDown, 1000);
        }
        else
        {
            alert("Time is up! Click refresh to reset the timer");
        }
    }
  }
  var HTMLQuestions = [
    {
      question: "What does HTML mean?",
      answers: {
        a: "Hightext Mobile Language ",
        b: "Hypertext Machine Language",
        c: "Hypertext Markup Language"
      },
      correctAnswer: "c"
    },
    {
      question: "Is HTML considered backend or front end developement?",
      answers: {
        a: "Front End Development",
        b: "Back End Development",
        c: "Both"
      },
      correctAnswer: "b"
    },
    {
      question: "What year was HTML created?",
      answers: {
        a: "1983",
        b: "1984",
        c: "1989"
      },
      correctAnswer: "c"
    },
  
  ];

  var numberOfQuestions = HTMLQuestions.length;

const CSSQuestions = [
    {
      question: "What does CSS mean?",
      answers: {
        a: "core style systems",
        b: "clean style semantics",
        c: "cascading styles sheets"
      },
      correctAnswer: "c"
    },
    {
      question: "Who created CSS?",
      answers: {
        a: "Dan Cederholm",
        b: "Håkon Wium Lie",
        c: "Dave Shea"
      },
      correctAnswer: "b"
    },
    {
      question: "CSS can be used for all of the following except",
      answers: {
        a: "Font color",
        b: "Backend server",
        c: "Changing back-ground-colors",
        d: "Font size"
      },
      correctAnswer: "b"
    }
  ];

  function startCSSCounter(){
    $("#seconds").text(startTime);
    timer = setTimeout(countDown, 1000);
   
    function countDown()
    {
        if (startTime > 0)
        {
           $("#seconds").text(--startTime);
           timer = setTimeout(countDown, 1000);
        }
        else
        {
            alert("Time is Up!!!");
        }
    }
  }

  function loadHTMLQuestions () {

  for (i = 0; i < numberOfQuestions; i++) { 
   
   if (i === 0){

    quest =i+1

   $(".DisplayQuestions").html(    
     

    // Taking  question  adding a value and adding question text.
  
      "<h3>Question "+quest+": "+ HTMLQuestions[i].question +"</h3>"+

      "<h4>answers:</h4>"+

          "<p>a: "+ HTMLQuestions[i].answers.a+"</p>"+
          "<p>b: "+ HTMLQuestions[i].answers.b+"</p>"+
          "<p>c: "+ HTMLQuestions[i].answers.c+"</p>"
  
      // <h3>correctAnswer: "c"</h3>
  )}  
 
   else {

    quest =i+1

   $(".DisplayQuestions").append(    

    // Taking  question  adding a value and adding question text.
  
      "<h3>Question "+quest+": "+ HTMLQuestions[i].question +"</h3>"+

      "<h4>answers:</h4>"+

          "<p>a: "+ HTMLQuestions[i].answers.a+"</p>"+
          "<p>b: "+ HTMLQuestions[i].answers.b+"</p>"+
          "<p>c: "+ HTMLQuestions[i].answers.c+"</p>"
  
      // <h3>correctAnswer: "c"</h3>
  )}}};
    
  function checkAnswers() {
    var rightAnswer, status;

    // Correct answer for question 1 is C
    rightAnswerQ1 = document.getElementById("Q1A").checked;
    // Correct answer for question 2 is B
    rightAnswerQ2 = document.getElementById("Q2C").checked;
    // Correct answer for question 3 is A
    rightAnswerQ3 = document.getElementById("Q3C").checked;

    // If Q1C is selected then rightAnswerQ1 will be true
    if (rightAnswerQ1) {
        statusQ1 = "Q1 - Correct";
    } else {
        statusQ1 = "Q1 - Wrong";
    }

    // If Q2B is selected then rightAnswerQ2 will be true
    if (rightAnswerQ2) {
        statusQ2 = "Q2 - Correct";
    } else {
        statusQ2 = "Q2 - Wrong";
    }

    // If Q3A is selected then rightAnswerQ3 will be true
    if (rightAnswerQ3) {
        statusQ3 = "Q3 - Correct";
    } else {
        statusQ3 = "Q3 - Wrong";
    }

  document.getElementById("demo").innerHTML = "<br>" + statusQ1 + "<br>" + statusQ2 + "<br>" + statusQ3;
}
  function resetAnswers() {

  document.getElementById("Q1A").checked = false;
  document.getElementById("Q1B").checked = false;
  document.getElementById("Q1C").checked = false;

  document.getElementById("Q2A").checked = false;
  document.getElementById("Q2B").checked = false;
  document.getElementById("Q2C").checked = false;

  document.getElementById("Q3A").checked = false;
  document.getElementById("Q3B").checked = false;
  document.getElementById("Q3C").checked = false;

  document.getElementById("demo").innerHTML = "<br>"

}








// Create variables for 
//     Correct Answers
//     Wrong Answers 
//     Un-Answered Questions

// Create a reset button










// setTimeout(function(){
// clearInterval(countDownTimerFunction);
// }, 5000);