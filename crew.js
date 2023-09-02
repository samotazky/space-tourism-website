//MENU
let menuBtn = document.querySelector(".menu-btn")
let btn1 = document.querySelector(".bar-1")
let menu = document.querySelector(".line-with-nav")

document.querySelector(".menu-btn").onclick = function (event) {
    menuBtn.classList.toggle("change")
    menu.classList.toggle("is-active")
}

const employeesArray = [{
    name: "Douglas Hurley",
    focus:"Commander ",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "url('/starter-code/assets/crew/image-douglas-hurley.png",
}, {
    name: "MARK SHUTTLEWORTH",
    focus:"Mission Specialist",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "url('/starter-code/assets/crew/image-mark-shuttleworth.png')"
}, {
    name: "Victor Glover",
    focus:"PILOT",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: "url('/starter-code/assets/crew/image-victor-glover.png')"
}, {
    name: "Anousheh Ansari",
    focus:"Flight Engineer",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "url('/starter-code/assets/crew/image-anousheh-ansari.png')"
}]

let douglasBtn = document.getElementById("douglas")
let markBtn = document.getElementById("mark")
let victorBtn = document.getElementById("victor")
let anoushehBtn = document.getElementById("anousheh")


let employeesFocus = document.querySelector(".left-side h3")
let employeesName = document.querySelector(".left-side h1")
let employeesText = document.querySelector(".left-side p")
let employeesImage = document.querySelector(".right-side")


douglasBtn.addEventListener("click", () => {
employeesFocus.textContent= employeesArray[0].focus
employeesName.textContent= employeesArray[0].name
employeesText.textContent = employeesArray[0].text
employeesImage.style.backgroundImage = employeesArray[0].image
})

markBtn.addEventListener("click", () => {
    employeesFocus.textContent= employeesArray[1].focus
    employeesName.textContent= employeesArray[1].name
    employeesText.textContent = employeesArray[1].text
    employeesImage.style.backgroundImage = employeesArray[1].image
    })

victorBtn.addEventListener("click", () => {
    employeesFocus.textContent= employeesArray[2].focus
    employeesName.textContent= employeesArray[2].name
    employeesText.textContent = employeesArray[2].text
    employeesImage.style.backgroundImage = employeesArray[2].image
    })

anoushehBtn.addEventListener("click", () => {
    employeesFocus.textContent= employeesArray[3].focus
     employeesName.textContent= employeesArray[3].name
    employeesText.textContent = employeesArray[3].text
    employeesImage.style.backgroundImage = employeesArray[3].image
    })


let employeesCircles = document.querySelectorAll(".crew-nav .employees");

employeesCircles.forEach(circle => {
    circle.addEventListener("click", () => {
        employeesCircles.forEach(otherCircle => {
            if (otherCircle === circle) {
                otherCircle.style.opacity = 1;
            } else {
                otherCircle.style.opacity = 0.174363;
            }
        });
    });
});
