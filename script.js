let count = 0;
let clicks = 1;
let firstLevelAMOUNT = 0;
let secondLevelAMOUNT = 0;

//XP system
var percentage;
var currentXP = 0;
var maxXP = 500;
var gainXP = 50;
let level = 1;
document.getElementById("level").innerHTML = "Level : " + level;

//The clicker
function Clicked() {
  count += clicks;
  let word = " XKR";
  document.getElementById("xkr").innerHTML = "";
  let xkrCount = document.getElementById("xkr").innerHTML = count + word;

  //Adds XP for every click
  currentXP += gainXP;
  percentage = (currentXP / maxXP) * 100;
  document.getElementById("XP").style.width = percentage + '%'
};

function levelUp() {
  if (currentXP === maxXP) {
    level++;
  }
}
//Levels
function firstLevel() {
  if (count >= 100) {
    clicks += 1
    count -= 100
    let word = " XKR";
    let xkrCount = document.getElementById("xkr").innerHTML = count + word;
    firstLevelAMOUNT += 1
    document.getElementById("firstLevel").innerHTML = firstLevelAMOUNT + " bought!";
  }
  else {
    alert("You do not have enough XKR!")
  }
};

function secondLevel() {
  if (count >= 500) {
    clicks += 10
    count -= 500
    let word = " XKR";
    let xkrCount = document.getElementById("xkr").innerHTML = count + word;
    secondLevelAMOUNT += 1
    document.getElementById("secondLevel").innerHTML = secondLevelAMOUNT + " bought!";
  }
  else {
    alert("You do not have enough XKR!")
  }
};