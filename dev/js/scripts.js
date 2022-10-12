import { gsap } from "gsap";

console.log("hello class");

gsap.set(".aqua-box",{transformOrigin:"20% 10%"});

let one = 0.25;
let halfOfOne = 0.5;

// access gsap | what do you want to animate?
gsap.to(".aqua-box",{duration:one, rotation:360,backgroundColor:"#fff", scaleX:one, stagger:halfOfOne });



// let box = document.querySelector("#aqua-box");

// box.addEventListener("click",function(){
//     // gsap.to("#aqua-box",{duration:1,x: 100 });
//     // gsap.to("#aqua-box",{duration:1,x: "+=100" });
// })

