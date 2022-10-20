import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* gsap.to("#dressimage", {
    duration: 1,
    x: 5,
    rotation: 360,
    scrollTrigger: {
        trigger: "#pinkbackground",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
}); */
gsap.from(".image1", {
    duration: 2,
    x: -500,

    scrollTrigger: {
        trigger: ".gallery",
        toggleActions: "restart pause reverse pause",
        markers: true,
        start: "center center"


    }
});
gsap.from(".image3", {
    duration: 2,
    x: 500,

    scrollTrigger: {
        trigger: ".gallery",
        toggleActions: "restart pause reverse pause",
        markers: true,
        start: "center center"


    }
});

gsap.from("#pinkbackground", {
    duration: 1.5,
    xPercent: -100,


    scrollTrigger: {
        trigger: ".gallery",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});
gsap.from("#second-line", {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#dress2",
        toggleActions: "restart pause reverse pause",
        color: "rgb(228, 104, 194)",
        markers: true,
        start: "top center",

    }
});