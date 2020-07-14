let jokes //Empty Global variable
let jokeIndex = 0//Global @ 0 index
let counter = 0
const getJoke = async () => {
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

getJoke().then((responses) => {
  const arrayOfJokes = []
  for (let i = 0; i < responses.length; i++) {
    arrayOfJokes[i] = responses[i].data.joke;
  }
  displayJokes(arrayOfJokes);
});

//Array of jokes
function displayJokes(arrayOfJokes) {
  console.log(arrayOfJokes)
  jokes = arrayOfJokes //Store array in "jokes" variable
  renderJoke()
}

function renderJoke() {
  // Find the div with joke-display as its ID
  // Set the innerHTML of that Node to the contents of the jokes variable
  if (jokeIndex !== jokes.length) {
    document.querySelector("#joke-display").innerHTML = jokes[jokeIndex]
  } else {
    document.querySelector("#joke-display").innerHTML = "GAME OVER MAN!"
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
      renderJoke()
    })
  }
}
attachListenerOnButton()


