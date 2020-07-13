const getJoke = async () => {
  const url = 'https://icanhazdadjoke.com/'
  try {
    const response = await axios.get(url)
    const joke = Object.keys(response.data.message)
    console.log(joke)

    // const select = document.querySelector()
    // optionValues(joke, select)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getJoke()