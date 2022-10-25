
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function scrollAnimation() {
    var tl = gsap.timeline({ scrollTrigger: {trigger: ".gallery", scrub:true, markers: true, start: "top 90%", end:"bottom 90%"}});
    tl.from(".image1", { duration: 2, x: -500 })
    .from(".image3", { duration: 2, x: 500});
    return tl;
}

function pinkAnimation() {
    var tl = gsap.timeline({scrollTrigger: { trigger: "#pinkbackground", scrub:true, markers: true, start: "top 90%", end:"bottom 95%"}});
    tl.from("#pinkbackground", {duration: 1.5, xPercent: -100});
    return tl;
    }

function secondlinetext() {
    var tl = gsap.timeline(
        {scrollTrigger: { trigger: "#dressimage", scrub:true, markers: true, start: "center bottom"}});
    tl.to("#second-line", {duration: 3, color:"#e467c3"});
    return tl;
    }
    
var mainTL = gsap.timeline();
mainTL.add(scrollAnimation())
.add(pinkAnimation())
.add(secondlinetext());
    

/* this is what i have left to gsap.from("#second-line", {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#dress2",
        toggleActions: "restart pause reverse pause",
        color: "rgb(228, 104, 194)",
        markers: true,
        start: "top center",

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
/* gsap.from(".image1", {
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
}); */




