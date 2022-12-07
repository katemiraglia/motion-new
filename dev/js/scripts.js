import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper, MotionPathPlugin, CustomBounce, CustomEase);





function bluepath2() {
    var tl = gsap.timeline();
    CustomBounce.create("yellowbounce", { strength: 0.5, squash: 3, squashID: "yellowbounce-squash" });
    tl.from("#rollingtogether_2", { y: -800, x: 600, ease: "yellowbounce", duration: 2 })
        .to("#rollingtogether_2", { scaleY: 0.3, scaleX: 1.5, ease: "yellowbounce-squash", transformOrigin: "bottom", duration: 2 }, 0);



    return tl;
}






function shadow() {
    var tl = gsap.timeline();


    tl.from("#curvestroke", { drawSVG: "0.100", duration: 3 })
        .from("#curve", { opacity: 0 });
    return tl;
}
function pathbounce() {
    var tl = gsap.timeline();
    tl.from

        .from(".doctor", { opacity: 0, duration: .3, delay: -1 })
        .from(".doctor", { y: -500, duration: 1, delay: -.3, delay: -1 });

    return tl;
}

// function drdrop() {
//     var tl = gsap.timeline();
//     tl.to(".doctor", { opacity: 0, duration: .3 })
//         .from(".doctor", { y: -500, duration: 2, delay: -.3 });



//     return tl;
// }
function airwalk() {
    var tl = gsap.timeline();
    tl.from("#yellowwithshapee", { opacity: 0, duration: .3 })
        .from("#yellowwithshapee", { y: 50, duration: .3 })
        .from("#withsoles", { opacity: 0, duration: .3 })
        .from("#bouncing", { opacity: 0, duration: .3 })
        .to("#bouncing", { scale: 1.2, duration: 2 })
        .to("#bouncing", { scale: 1, duration: 2 })
        .from(".airwalk", { opacity: 0, duration: .3 })
        .from("#yellowlines", { x: 600 });


    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(bluepath2())
    // .add(backup())
    .add(shadow())
    .add(pathbounce())
    .add(airwalk());
// .add(drdrop);


// MotionPathHelper.create(bouncepath1)
GSDevTools.create();