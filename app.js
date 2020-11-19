;(function () {
	let jokes //Empty variable
	let jokeIndex //Empty variable set @ 0 index
	let counter //Empty counter set @ 0
	const getJoke = async () => {
		jokeIndex = 0
		counter = 0
		const url = "https://icanhazdadjoke.com/"
		try {
			//Create empty array
			const arrOfRequests = []

			//Iterate for 10 jokes through Axios; passed in the header as an object
			for (let i = 0; i < 10; i++) {
				arrOfRequests[i] = axios.get(url, {
					headers: { Accept: "application/json" },
				})
			}

			//Wait until all promises are fulfilled, then the responses are pushed into an empty array; Iterate through the array of 10 and populate arrayOfJokes. displayJokes takes the arrayOfJokes as parameter.
			return await Promise.all(arrOfRequests)
		} catch (error) {
			console.log(`Error: ${error}`)
		}
	}

	function initializeJokes() {
		document.getElementById("dad-30").className = "hide"
		document.getElementById("dad-70").className = "hide"
		document.getElementById("dad-100").className = "hide"

		getJoke().then((responses) => {
			const arrayOfJokes = []
			for (let i = 0; i < responses.length; i++) {
				arrayOfJokes[i] = responses[i].data.joke
			}
			displayJokes(arrayOfJokes)
		})
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

	//Sort vote choices and render results of choices in second-view
	function renderResults() {
		document.getElementById("first-view").classList.add("hide")
		document.getElementById("first-view").classList.remove("show")
		document.getElementById("second-view").classList.remove("hide")
		document.getElementById("second-view").classList.add("show")

		if (counter <= 3) {
			document.getElementById("dad-30").classList.add("show")
			document.getElementById("dad-30").classList.remove("hide")
			document.querySelector("html").style.backgroundImage =
				"url(BG_frown_orange.jpg)"
		} else if (counter <= 7) {
			document.getElementById("dad-70").classList.add("show")
			document.getElementById("dad-70").classList.remove("hide")
			document.querySelector("html").style.backgroundImage =
				"url(BG_smile-orange.jpg)"
		} else {
			document.getElementById("dad-100").classList.add("show")
			document.getElementById("dad-100").classList.remove("hide")
			document.querySelector("html").style.backgroundImage =
				"url(BG_smile-orange.jpg)"
		}
	}

	function checkView() {
		// Find the div with joke-display as its ID
		// Set the innerHTML of that Node to the contents of the jokes variable
		if (jokeIndex !== jokes.length) {
			renderJoke()
		} else {
			renderResults()
			attachListenerOnRestartButton()
		}
	}

	function attachListenerOnButton() {
		const findButton = document.querySelectorAll(".vote-buttons")
		for (let i = 0; i < findButton.length; i++) {
			//Iterate through button array; increment
			findButton[i].addEventListener("click", (e) => {
				//Find button in array
				e.preventDefault()
				if (e.target.id === "yay-button") {
					//If yay button clicked, increment counter
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
		const findRestartButton = document.querySelector("#restart")
		findRestartButton.addEventListener("click", (e) => {
			e.preventDefault()
			document.getElementById("second-view").classList.add("hide")
			document.getElementById("second-view").classList.remove("show")
			document.getElementById("first-view").classList.remove("hide")
			document.getElementById("first-view").classList.add("show")
			document.querySelector("html").style.backgroundImage =
				"url(BG_bananas2_main.png)"
			initializeJokes()
		})
	}
})()
