
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function scrollAnimation() {
    var tl = gsap.timeline({ scrollTrigger: {trigger: ".gallery", scrub:true, start: "top 90%", end:"bottom 90%"}});
    tl.from(".image1", { duration: 2, x: -500 })
    .from(".image3", { duration: 2, x: 500});
    return tl;
}

function pinkAnimation() {
    var tl = gsap.timeline({scrollTrigger: { trigger: "#pinkbackground", scrub:true, start: "top 90%", end:"bottom 95%"}});
    tl.from("#pinkbackground", {duration: 1.5, xPercent: -100});
    return tl;
    }

function secondlinetext() {
    var tl = gsap.timeline(
        {scrollTrigger: { trigger: "#dressimage", scrub:true, start: "center bottom"}});
    tl.to("#second-line", {duration: 1, color:"#e467c3"});
    return tl;
    }
function dress2animation() {
    var tl = gsap.timeline({scrollTrigger: { trigger: "#dressimage", scrub:true, start: "top bottom", end:"bottom 83%"}});
    tl.from("#dress2", {duration: 1, y: 1000, scale:1.5});
    return tl;
    }
/* function menutext() {
    var tl = gsap.timeline({scrollTrigger: { trigger: ".image2", scrub:true, markers: true, start: "top top"}});
    tl.to(".centered", {duration: 3, opacity:0});
    return tl;
    } */

var mainTL = gsap.timeline();
mainTL.add(scrollAnimation())
.add(pinkAnimation())
.add(secondlinetext())
.add(dress2animation());
    




