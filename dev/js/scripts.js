import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

/* gsap.to("greenbackground", {
    x: 100,
    duration: 3

})
 */



gsap.registerPlugin(ScrollTrigger);

function scrollAnimation() {
    var tl = gsap.timeline();
    tl.to(".greenbackground", {
        duration: 1,
        x: 400,
        scrollTrigger: {
            trigger: ".greenbackground",
            // toggleActions: "restart pause reverse pause",
            markers: true,
            start: "0px 50%",
            end: "100% 10%",
            scrub: true,
            pin: true
        }
    });
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(scrollAnimation());































/* import { gsap } from "gsap";

console.log("hello class");

gsap.set(".aqua-box",{transformOrigin:"20% 10%"});

let one = 0.25;
let halfOfOne = 0.5;

// access gsap | what do you want to animate?
gsap.to(".aqua-box",{duration:one, rotation:360,backgroundColor:"#fff", scaleX:one, stagger:halfOfOne });

 */

// let box = document.querySelector("#aqua-box");

// box.addEventListener("click",function(){
//     // gsap.to("#aqua-box",{duration:1,x: 100 });
//     // gsap.to("#aqua-box",{duration:1,x: "+=100" });
// })