let count = 0;
let cps = 0;
let clicks = 1;
let firstLevelAMOUNT = 0;
let secondLevelAMOUNT = 0;



document.getElementById("xkr").innerHTML = count+" XKR";

function Clicked() {
  count+=clicks;
  let word = " XKR";
  document.getElementById("xkr").innerHTML = "";
  let xkrCount = document.getElementById("xkr").innerHTML = count+word;
};

function incrementSeconds() {
  seconds += 1;
  
}  

function firstLevel() {
  if (count >= 100) {
    clicks+=1
    count-=100
    let word = " XKR";
    let xkrCount = document.getElementById("xkr").innerHTML = count+word;
    firstLevelAMOUNT+=1
    document.getElementById("firstLevel").innerHTML = firstLevelAMOUNT+" bought!"; 
  }
  else {
    alert("You do not have enough XKR!")
  }
};

function secondLevel() {
  if (count >= 500) {
    clicks+=10
    count-=500
    let word = " XKR";
    let xkrCount = document.getElementById("xkr").innerHTML = count+word;
    secondLevelAMOUNT+=1
    document.getElementById("secondLevel").innerHTML = secondLevelAMOUNT+" bought!";
  }
  else {
    alert("You do not have enough XKR!")
  }
};

function thirdLevel() {
  if (count >= 1000) {
    count-=500
    let word = " XKR";
    let xkrCount = document.getElementById("xkr").innerHTML = count+word;
    secondLevelAMOUNT+=1
    document.getElementById("secondLevel").innerHTML = secondLevelAMOUNT+" bought!";
  }
  else {
    alert("You do not have enough XKR!")
  }  
};