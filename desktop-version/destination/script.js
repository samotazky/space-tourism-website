const moon = document.getElementById("moon-section")
const mars = document.getElementById("mars-section")
const europa = document.getElementById("europa-section")
const titan = document.getElementById("titan-section")

let planetName = document.querySelector(".right-side h1")
let planetInfo = document.querySelector(".right-side p")
let planetDistance = document.querySelector(".distance p")
let planetTravel = document.querySelector(".travel-time p")
let planetImg = document.querySelector(".left-side img")

const planetArray = [{
    name: "moon",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: "/starter-code/assets/destination/image-moon.png"
}, {
    name: "mars",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: "/starter-code/assets/destination/image-mars.png"
}, {
    name: "europa",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: "/starter-code/assets/destination/image-europa.png"
}, {
    name: "titan",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1,6 BIL. KM",
    travelTime: "7 YEARS",
    image: "/starter-code/assets/destination/image-titan.png"
}]

moon.addEventListener("click", (e) => {
    e.preventDefault()
    planetName.textContent = planetArray[0].name
    planetInfo.textContent = planetArray[0].text
    planetDistance.textContent = planetArray[0].distance
    planetTravel.textContent = planetArray[0].travelTime
    planetImg.src = planetArray[0].image

    console.log(planetImg);
})

mars.addEventListener("click", (e) => {
    e.preventDefault()
    planetName.textContent = planetArray[1].name
    planetInfo.textContent = planetArray[1].text
    planetDistance.textContent = planetArray[1].distance
    planetTravel.textContent = planetArray[1].travelTime
    planetImg.src = planetArray[1].image
})

europa.addEventListener("click", (e) => {
    e.preventDefault()
    planetName.textContent = planetArray[2].name
    planetInfo.textContent = planetArray[2].text
    planetDistance.textContent = planetArray[2].distance
    planetTravel.textContent = planetArray[2].travelTime
    planetImg.src = planetArray[2].image
})

titan.addEventListener("click", (e) => {
    e.preventDefault()
    planetName.textContent = planetArray[3].name
    planetInfo.textContent = planetArray[3].text
    planetDistance.textContent = planetArray[3].distance
    planetTravel.textContent = planetArray[3].travelTime
    planetImg.src = planetArray[3].image
    console.log(planetImg);
})

console.log(planetImg);
