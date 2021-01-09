VanillaTilt.init(document.querySelector(".container"), {
    max: 25,
    speed: 400,
    glare: false,
    "max-glare": 0.2,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".container"));
