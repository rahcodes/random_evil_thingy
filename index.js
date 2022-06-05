const button = document.getElementById("btn")
const introText = document.getElementById("introText")
const mainDiv = document.getElementsByClassName("main")[0]

const searchQuery = "library"

const baseURL = "https://api.unsplash.com/photos/random?"
const reqParams = new URLSearchParams({
    client_id: "N7XbyTBdwiB2G2TSWEOWhs3_grWi1nD0mtyRye4hkAw",
    query: searchQuery
})
const reqURL = baseURL + reqParams

button.onclick = async (event) => {
    const res = await fetch(reqURL)

    if (res.status == 200) {
        event.target.classList.add("hidden")
        introText.classList.add("hidden")

        const resJSON = await res.json()
        const image = document.createElement("img")
        image.classList.add("birdImg")
        image.src = resJSON.urls.full
        image.alt = `image of ${searchQuery}`

        mainDiv.appendChild(image)
    }
}