var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

// INITIALIZE THE GAME
$("body").keydown(function () {
  if (!started) {
    nextsequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playsound(userChosenColor);
  animatepress(userChosenColor);

  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
});

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatepress(currentcolor) {
  $("#" + currentcolor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
}

function nextsequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // Pattern Assigned to the player
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playsound(randomChosenColour);
}

function checkAnswer(currentlevel) {
  if (userClickedPattern[currentlevel] === gamePattern[currentlevel]) {
    console.log("SUCESS");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  } else {
    console.log("WRONG");

    playsound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key To Restart");

    startOver();
  }
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
