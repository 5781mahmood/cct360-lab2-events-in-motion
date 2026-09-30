let moodTitle = document.getElementById("moodTitle");
let statusMessage = document.getElementById("statusMessage");
let booth = document.getElementById("booth");

let focusedBtn = document.getElementById("focusedBtn");
let tiredBtn = document.getElementById("tiredBtn");
let energizedBtn = document.getElementById("energizedBtn");
let saveBtn = document.getElementById("saveBtn");

let currentMood = "none";

function setFocused() {
  currentMood = "Focused";
  moodTitle.innerHTML = "Mood: Focused";
  statusMessage.innerHTML = "Locked in. Ready to get work done.";
  booth.style.backgroundColor = "#d6eaf8";
  document.body.style.backgroundColor = "#5dade2";
}

function setTired() {
  currentMood = "Tired";
  moodTitle.innerHTML = "Mood: Tired";
  statusMessage.innerHTML = "Running on low energy today.";
  booth.style.backgroundColor = "#f5eef8";
  document.body.style.backgroundColor = "#af7ac5";
}

function setEnergized() {
  currentMood = "Energized";
  moodTitle.innerHTML = "Mood: Energized";
  statusMessage.innerHTML = "Feeling great and ready for anything!";
  booth.style.backgroundColor = "#fef9e7";
  document.body.style.backgroundColor = "#f4d03f";
}

function resetMessage() {
  moodTitle.innerHTML = "Campus Mood Booth";
  statusMessage.innerHTML = "How are you feeling on campus today?";
  booth.style.backgroundColor = "#ffffff";
  document.body.style.backgroundColor = "#f0f0f0";
  currentMood = "none";
}

function saveMood() {
  if (currentMood === "none") {
    alert("Pick a mood before saving!");
    return;
  }

  let answer = confirm("Save your mood as " + currentMood + "?");

  if (answer === true) {
    statusMessage.innerHTML = "Saved! Your campus mood is " + currentMood + ".";
    alert("Mood saved.");
  } else {
    statusMessage.innerHTML = "Save cancelled. Mood stayed as " + currentMood + ".";
  }
}

focusedBtn.addEventListener("click", setFocused);
tiredBtn.addEventListener("click", setTired);
energizedBtn.addEventListener("click", setEnergized);
saveBtn.addEventListener("click", saveMood);

document.addEventListener("keydown", function(event) {
  if (event.key === "r" || event.key === "R") {
    resetMessage();
  }
});
