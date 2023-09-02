//MENU
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".line-with-nav")


document.querySelector(".menu-btn").onclick = function (event) {
    menuBtn.classList.toggle("change")
    menu.classList.toggle("is-active")
}


const technologyArray = [{
    heading: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "/starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
}, {
    heading: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "/starter-code/assets/technology/image-spaceport-portrait.jpg"
}, {
    heading: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "/starter-code/assets/technology/image-space-capsule-portrait.jpg"
}]

let btn = document.querySelectorAll(".btn")

btn.forEach(oneBtn => {
    oneBtn.addEventListener("click", () => {
        btn.forEach(otherBtn => {
            if (otherBtn === oneBtn) {
                otherBtn.style.background = "#fff"
                otherBtn.style.color = "#0B0D17"
            }

            else {
                otherBtn.style.background = "transparent"
                otherBtn.style.color = "#fff"
            }
        })
    })
})

let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")

let heading = document.querySelector(".right h1")
let text = document.querySelector(".right p")
let image = document.querySelector(".right-side img")

btn1.addEventListener("click", () => {
    heading.textContent = technologyArray[0].heading
    text.textContent = technologyArray[0].text
    image.src = technologyArray[0].image
})

btn2.addEventListener("click", () => {
    heading.textContent = technologyArray[1].heading
    text.textContent = technologyArray[1].text
    image.src = technologyArray[1].image
})

btn3.addEventListener("click", () => {
    heading.textContent = technologyArray[2].heading
    text.textContent = technologyArray[2].text
    image.src = technologyArray[2].image
})