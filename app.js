const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function resetGame(){
  for(let i = COLORS.length - 1; i >= 0; i--){
    console.log(gameContainer[i])
    gameContainer.children[i].remove();
  }
  createDivsForColors(shuffle(COLORS));
  correct = 0;
}

let prev = null;
let correct = 4;
function handleCardClick(e){
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let target = e.target;
  target.style.background = target.classList;

  if(prev === null){
    prev = target;
  } else if(target.classList.contains('Correct')){
    prev = null;
    alert("That's cheating ;)")
  } else {
    if(target == prev){
      alert("Cannot click the same card twice")
      prev.style.background = 'white';
      target.style.background = 'white';
      prev = null;
    } else if(target.classList.value == prev.classList.value){
      target.style.background = target.classList;
      setTimeout(alert('Correct'), 100);
      correct++
      target.classList.add('Correct');
      prev.classList.add('Correct')
      prev = null;
      if(correct === COLORS.length / 2){
        alert('You win!')
        resetGame()
        setTimeout(alert('All Reset'), 500)
      }
    } else {
      setTimeout(function(){
        alert('Incorrect :(')
        prev.style.background = 'white';
        target.style.background = 'white';
        prev = null;
      }, 100);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);