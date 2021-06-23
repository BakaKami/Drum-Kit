function makeSound(key) {
  // mapping sounds by key
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonKey);
      break;
  }
}

function buttonAnimation(currentKey) {
  // add animation when pressed
  var activeKey = document.querySelector("." + currentKey);

  activeKey.classList.add("pressed");
  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
}

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   // detect button press
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonKey = this.innerHTML;
//     makeSound(buttonKey);
//     buttonAnimation(buttonKey);
//   });
// }

// document.addEventListener("keydown", function (event) {
//   // detect keyboard press
//   var buttonKey = event.key;
//   makeSound(buttonKey);
//   buttonAnimation(buttonKey);
// });

$(".drum").click(function () {
  // detect button press
  var buttonKey = this.innerHTML;
  makeSound(buttonKey);
  buttonAnimation(buttonKey);
});

$("body").keypress(function (event) {
  // detect keyboard press
  var buttonKey = event.key;
  makeSound(buttonKey);
  buttonAnimation(buttonKey);
});
