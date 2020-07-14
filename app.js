let jokes //Empty Global variable
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
}


