let cursorBlur = document.querySelector("#cursor-blur");
let mouseX = 0, mouseY = 0;
let blurX = 0, blurY = 0;
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function animateBlur() {
    blurX += (mouseX - blurX) * 0.05;
    blurY += (mouseY - blurY) * 0.05;

    cursorBlur.style.left = blurX - 200 + "px";
    cursorBlur.style.top = blurY - 200 + "px";

    requestAnimationFrame(animateBlur);
}
animateBlur();





let links = document.querySelectorAll("a");
let pointer = document.querySelector("#cursore");
pointer.classList.add("cursore")
document.addEventListener("mousemove", follow)
links.forEach((link, i) => {
    link.addEventListener("mouseover", () => {
        document.addEventListener("mousemove", track)
        document.removeEventListener("mousemove", follow)
        pointer.classList.add("on-link")
        pointer.classList.remove("cursore")
        pointer.style.transform = "scale(1)"
    })
    link.addEventListener("mouseout", () => {
        document.removeEventListener("mousemove", track)
        document.addEventListener("mousemove", follow)
        pointer.classList.add("cursore")
        pointer.classList.remove("on-link")
    })
})
function track(e) {
    pointer.style.left = e.clientX - 35 + "px";
    pointer.style.top = e.clientY - 35 + "px"

}
function follow(e) {
    pointer.style.top = e.clientY - 10 + "px";
    pointer.style.left = e.clientX - 10 + "px";
}







gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    hieght: "120px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -15%",
        scrub: 2,
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    duration: 0.3,
    hieght: "120px",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top 5%",
        end: "top -100%",
        scrub: 3,

    }
})
const insta = document.querySelectorAll(".insta");
const children = document.querySelectorAll(".stop ");

children.forEach(child => {
    child.addEventListener("mouseenter", () => {
        insta.forEach(inst => {
            inst.style.animationPlayState = "paused"
        })
        child.style.filter = "none"
    });
    child.addEventListener("mouseleave", () => {
        insta.forEach(inst => {
            inst.style.animationPlayState = "running"
        })
        child.style.filter = "grayscale(10%) brightness(0.7)"
    });
});
const boxes = document.querySelectorAll('.text-quat');
let index = 0;

function showNext() {
    boxes.forEach((box, i) => {
        box.classList.remove('active'); // hide all
    });

    boxes[index].classList.add('active'); // show current one

    index = (index + 1) % boxes.length;
}

showNext(); // show first
setInterval(showNext, 5000);

let current = 0;
let foodImage = document.querySelectorAll(".food-image");
function changeFood() {
    foodImage.forEach((food, i) => {
        food.style.opacity = 0;
    })
    foodImage[current].style.opacity = 1;
    current = (current + 1) % foodImage.length;
}
setInterval(changeFood, 4000);
changeFood()

let textWait = document.querySelector(".text-wait")
let cardWait = document.querySelectorAll(".card-wait")
cardWait.forEach((card) => {
    card.addEventListener("mouseover", () => {
        textWait.style.textShadow = `1px 0 greenyellow,
        -1px 0 greenyellow,
        0 1px greenyellow,
        0 -1px greenyellow,
        1px 1px greenyellow,
        -1px 1px greenyellow,
        1px -1px greenyellow,
        -1px -1px greenyellow`
    })
    card.addEventListener("mouseout", () => {
        textWait.style.textShadow = ` 1px 0 white,
        -1px 0 white,
        0 1px white,
        0 -1px white,
        1px 1px white,
        -1px 1px white,
        1px -1px white,
        -1px -1px white`
    })
})
