function done() {
    var count = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var fin = document.getElementById('final');
  var quiz = document.getElementById('quiz');


  if (q1 == "A") {
    count++;
  }

  if (q2 == "C") {
    count++;
  }

  if (q3 == "B") {
    count++;
  }

  if (q4 == "C") {
    count++;
  }

  if (q5 == "B") {
    count++;
  }

  if (q6 == "C") {
    count++;
  }

  if (q7 == "A") {
    count++;
  }

  if (count >= 4) {
    document.write("<br>");
    document.write("<span style=\"color: #16213E;font-size: 2em; font-family: 'Roboto', sans-serif;\">Your test has been submitted successfully! <\/span>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<span style=\"color: green;font-size: 2em; font-family: 'Roboto', sans-serif;\">Your score is " + count  + "/7. Well done and keep up the good work. <\/span>");
  } else {
    document.write("<br>");
    document.write("<span style=\"color: #16213E;font-size: 2em; font-family: 'Roboto', sans-serif;\">Your test has been submitted successfully! <\/span>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<span style=\"color: red;font-size: 2em; font-family: 'Roboto', sans-serif;\">You score is " + count + "/7. You can do better!<\/span>");
  }

}
