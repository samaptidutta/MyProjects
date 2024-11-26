let crsr = document.querySelector(".cursor")
let crsrblr = document.querySelector(".cursorblur")
document.addEventListener("mousemove", (e) => {
    console.log(e.y);
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"

})

document.addEventListener("mousemove", (e) => {
    console.log(e.y);
    crsrblr.style.left = e.x - 200 + "px"
    crsrblr.style.top = e.y - 200 + "px"

})

let heading = document.querySelectorAll(".nav h4")

console.log(heading);
heading.forEach((ele) => {
    console.log(ele);
    ele.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })




})



//for animation GSAP: GreenSock Animation Platform, is a powerful JavaScript animation library that is used by web developers and designers to create interactive and engaging websites. GSAP is known for its versatility, speed, and ease of use, making it a popular choice among developers worldwide.

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -30vh",
        end: "top -70%",
        scrub: 2
    }
})


// gsap.from("#about-us img,#about-us-in", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: "#about-us",
//         scroller: "body",
//         // markers:true,
//         start: "top 75%",
//         end: "top 65%",
//         scrub: 3
//     }
// })


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 65%",
        scrub: 4
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,

        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})
gsap.from("#colon2", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,

        start: "top 55%",
        end: "top 45%",
        scrub: 5
    },
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,

        start: "top 75%",
        end: "top 75%",
        scrub: 7
    }
})