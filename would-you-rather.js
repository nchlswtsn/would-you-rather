var firstChoice = document.getElementById("optionOne");
var secondChoice = document.getElementById("optionTwo");
var button = document.getElementById("button");

var choices = [
  "Go bald overnight",
  "Lose a finger",
  "Forever be sweaty",
  "Have to eat the same food for the rest your life",
  "Never have sex again",
  "Only be able to walk backwards",
  "Only be able to go outside at night",
  "Always be smelly",
  "Be punched in the face every morning for the rest of your life",
  "Never be able to walk again",
  "Never be able to have kids",
  "Run Only",
  "Crawl Only",
  "Eat Fast Food every day",
  "Only eat vegetables",
  "Go to prison for a year",
  "Live with your parents for the rest of your life",
  "Be allergic to sugar",
  "Shrink an half an inch every year",
  "Lose an arm",
  "Lose a leg",
  "Not be able to smell",
  "Going blind",
  "Having a micropenis/missing vagina",
  "Not be able to drive a car",
  "Have to be a medical student for the rest of your life",
  "Have to live alone forever",
  "Must always have a roommate",
  "Be a compulsive necrophiliac",
  "Never have a cellphone again",
  "Have to pee every hour on the hour",
  "Know every time your dad has a boner",
  "Know every time your parents have sex",
  "Have to tell your dad every time you have sex",
  "Finish two pies everyday",
  "Never have any pets",
  "Have to live with 25 cats",
  "Have to work at Wal Mart for the rest of your life",
  "Get ED over night",
  "Wear a poop-bag for the rest of your life",
  "Never be able to use the internet",
  "Move outside the US and never come back",
  "Permanent burn scars on your whole body",
  "Live in the Middle East for a year",
  "Never make more than minimum wage",
  "Have an episode of explosive diarrhea while giving a presentation",
  "Have explosive diarrhea anytime anyone says your name",
  "Fart uncontrollably",
  "Always be hot",
  "Alwats be cold",
  "Constantly have itchy skin",
  "Only wear the opposite genders clothing",
  "Be forced to kill a kitten",
  "Toss a puppy in a wood chipper"
]




function random() {
  var itemOne = choices[Math.floor(Math.random() * choices.length)];
  var itemTwo = choices[Math.floor(Math.random() * choices.length)];

  if(itemOne !== itemTwo && choices.length > 0){
    firstChoice.textContent = itemOne;
    secondChoice.textContent = itemTwo;
    //
    // var removeItemOne = choices.indexOf(itemOne);
    // var removeItemTwo = choices.indexOf(itemTwo);

    choices.splice(itemOne, 1);
    choices.splice(itemTwo, 1);
    console.log(choices);
} else {
  random();
  choices.splice(itemOne, 1);
  choices.splice(itemTwo, 1);
  }
}

random();

button.addEventListener("click", function(){
  random();
});
