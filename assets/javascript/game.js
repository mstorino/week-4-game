
// Global Variables
var lossCount = 0;
var winCount = 0;
var score = 0;
var targetScore = 20;

// Crystal Variables
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  pink:
  {
    name: "Pink",
    value: 0
  }
};

start();

//set game state
function start() {
	score = 0;
	$("#score").html("<h2> Your Score: " + score);
	crystalVal();
	targetScoreVal();
}
//random math function to generate crystal values and targetscore

function randomNum (min, max){
	return Math.floor(Math.random() * (max-min + 1)) + min;
};

//set random targetScore Value and render in html
function targetScoreVal () {
	targetScore = randomNum(20, 50);
	$("#targetScore").html("<h2> Target Score: " + targetScore);
}

// assign random values to each jewel
function crystalVal(){
	crystal.blue.value = randomNum(1, 10);
	crystal.green.value = randomNum(1, 10);
	crystal.red.value = randomNum(1, 10);
	crystal.pink.value = randomNum(1, 10);
}

// add value of jewel to #score everytime a jewel is clicked

function addValue (crystal) {
	score += crystal.value;
	checkWin();
	$("#score").html("<h2> Your Score: " + score);
}

// end game when the score equals or exceeds totalscore
function checkWin() {
	if (score === targetScore) {
		$("#scoreboard").html("<h2>Game Over. You won</h2>");
		winCount++
		$("#winCount").html("<h3>Wins: " + winCount + "</h3>");
		start();
	} else if (score > targetScore) {
		$("#scoreboard").html("<h2>Game Over. You Lost</h2>");
		lossCount++
		$("#lossCount").html("<h3>Losses: " + lossCount + "</h3>");
		start();
	}
}

// Click Events: collect value of jewel onclick
$("#red").click(function(){
	addValue(crystal.red);
});

$("#pink").click(function(){
	addValue(crystal.pink);
});

$("#green").click(function(){
	addValue(crystal.green);
});

$("#blue").click(function(){
	addValue(crystal.blue);
});