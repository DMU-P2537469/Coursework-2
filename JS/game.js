
function promptMe(){
var questions = [
  {
    prompt:"The Winter Palace can be visited in which city?\n(a) London\n\(b) Saint Petersburg\n\(c) Shanghai",
    answer: "b"
  },
  {
    prompt:"Which fruit has a variety called 'Winter Banana'?\n(a) Mulberry\n\(b) Apricot\n\(c) Apple",
    answer: "c"
  },
  {
    prompt:"Which winter sport is sometimes known as the roaring game?\n(a) Curling\n\(b) Snow volleyball\n\(c) Ice racing",
    answer: "a"
  },
  {
    prompt:"Which country has won the most medals throughout Winter Olympic history?\n(a) Norway\n\(b) England\n\(c) Sweden",
    answer: "a"
  },
  {
    prompt:"How long does winter last in the northern hemisphere?\n(a) From September to December\n\(b) From November to January\n\(c) From December to March",
    answer: "c"
  },
  {
    prompt:"Which kind of snow is suitable for making a snowman?\n(a) Artificial snow\n\(b) Wet snow\n\(c) Dry snow",
    answer: "b"
  },
  {
    prompt:"Which of the following is the name of a play by Williams Shakespeare?\n(a) The story of the winter\n\(b) A tale of the winter\n\(c) The winter’s tale",
    answer: "c"
  },
  {
    prompt:"The first Olympic Winter Games were held in which country?\n(a) Canada\n\(b) The United States of America\n\(c) France",
    answer: "c"
  },
  {
    prompt:"Which condition refers to the damage to body tissue caused by freezing?\n(a) Frostbite\n\(b) Hypothermia\n\(c) Decomposition",
    answer: "a"
  },
]


var score = 0;

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer) {
    score++;
    alert("Correct!");
  }

  else {
  alert("Wrong!");
    }
  }
alert("You got " + score + "/" + questions.length);

}
