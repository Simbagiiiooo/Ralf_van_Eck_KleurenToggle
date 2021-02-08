const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links__nav");
const homeButton = document.querySelector('.nav__home');
const redButton = document.querySelector('.nav__red');
const orangeButton = document.querySelector('.nav__orange');
const purpleButton = document.querySelector('.nav__purple');
const greenButton = document.querySelector('.nav__green');
const bodyColor = document.querySelector('.makeOtherColor');


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav_links");
    links.forEach(link => {
    link.classList.toggle("fade");
    });
});

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links');
    links.forEach(link => {
        link.classList.toggle("fade");
        });
    });

const makeBodyLightgrey = () => {
    bodyColor.classList.remove("red");
    bodyColor.classList.remove("orange");
    bodyColor.classList.remove("purple");
    bodyColor.classList.remove("green");
    bodyColor.classList.add("home");
};
homeButton.addEventListener("click", makeBodyLightgrey);

const makeBodyRed = () => {
    bodyColor.classList.remove("home");
    bodyColor.classList.remove("orange");
    bodyColor.classList.remove("purple");
    bodyColor.classList.remove("green");
    bodyColor.classList.add("red");
};
redButton.addEventListener("click", makeBodyRed);

const makeBodyOrange = () => {
    bodyColor.classList.remove("home");
    bodyColor.classList.remove("red");
    bodyColor.classList.remove("purple");
    bodyColor.classList.remove("green");
    bodyColor.classList.add("orange");
};
orangeButton.addEventListener("click", makeBodyOrange);

const makeBodyPurple = () => {
    bodyColor.classList.remove("home");
    bodyColor.classList.remove("orange");
    bodyColor.classList.remove("red");
    bodyColor.classList.remove("green");
    bodyColor.classList.add("purple");
};
purpleButton.addEventListener("click", makeBodyPurple);

const makeBodyGreen = () => {
    bodyColor.classList.remove("home");
    bodyColor.classList.remove("orange");
    bodyColor.classList.remove("purple");
    bodyColor.classList.remove("red");
    bodyColor.classList.add("green");
};
greenButton.addEventListener("click", makeBodyGreen);