import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#dressimage", {
    duration: 1,
    x: 5,
    rotation: 360,
    scrollTrigger: {
        trigger: "#pinkbackground",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});