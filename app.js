let jokes //Empty Global variable
let jokeIndex //Global @ 0 index
let counter

const getJoke = async () => {
  jokeIndex = 0
  counter = 0
  const url = 'https://icanhazdadjoke.com/'
  try {
    //Create empty array
    const arrOfRequests = [];

    //Iterate for 10 jokes through Axios
    for (let i = 0; i < 10; i++) {
      arrOfRequests[i] = axios.get(url, {
        headers: { "Accept": "application/json" }
      });
    }

    //Wait until all promises are fulfilled, then the responses are pushed into an empty array; Iterate through the array of 10 and populate arrayOfJokes. displayJokes takes the arrayOfJokes as parameter. 
    return await Promise.all(arrOfRequests)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function initializeJokes() {
  document.getElementById("30-dad").className = "hide";
  document.getElementById("70-dad").className = "hide";
  document.getElementById("100-dad").className = "hide";

  getJoke().then((responses) => {
    const arrayOfJokes = []
    for (let i = 0; i < responses.length; i++) {
      arrayOfJokes[i] = responses[i].data.joke;
    }
    displayJokes(arrayOfJokes);
  });
}
initializeJokes()

//Array of jokes
function displayJokes(arrayOfJokes) {
  console.log(arrayOfJokes)
  jokes = arrayOfJokes //Store array in "jokes" variable
  checkView()
}

function renderJoke() {
  document.querySelector("#joke-display").innerHTML = jokes[jokeIndex]
}

//Sort votes and render results of choices
function renderResults() {
  document.getElementById("first-view").classList.add("hide")
  document.getElementById("first-view").classList.remove("show")
  document.getElementById("second-view").classList.remove("hide")
  document.getElementById("second-view").classList.add("show")

  if (counter <= 3) {
    document.getElementById("30-dad").classList.add("show")
    document.getElementById("30-dad").classList.remove("hide")
  } else if (counter <= 7) {
    document.getElementById("70-dad").classList.add("show")
    document.getElementById("70-dad").classList.remove("hide")
  } else {
    document.getElementById("100-dad").classList.add("show")
    document.getElementById("100-dad").classList.remove("hide")
  }
}

function checkView() {
  // Find the div with joke-display as its ID
  // Set the innerHTML of that Node to the contents of the jokes variable
  if (jokeIndex !== jokes.length) {
    renderJoke()
  } else {
    renderResults()
  }
}

function attachListenerOnButton() {
  const findButton = document.querySelectorAll(".vote-buttons")
  for (let i = 0; i < findButton.length; i++) { //Iterate through button array; increment
    findButton[i].addEventListener('click', (e) => { //Find button in array
      e.preventDefault()
      if (e.target.id === "yay-button") { //If yay button clicked, increment counter
        counter++
      }
      jokeIndex++ //Moves forward jokes
      checkView()
    })
  }
}
attachListenerOnButton()

//Put initializeJokes inside handler for restart; inverse of renderResults
function attachListenerOnRestartButton() {
  const findRestartButton = document.querySelector(".return-home")
  findRestartButton.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById("second-view").classList.add("hide")
    document.getElementById("second-view").classList.remove("show")
    document.getElementById("first-view").classList.remove("hide")
    document.getElementById("first-view").classList.add("show")
    initializeJokes()
  })
}
attachListenerOnRestartButton()
