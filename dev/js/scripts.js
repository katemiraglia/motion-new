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
    CustomBounce.create("yellowbounce", { strength: 0.7, squash: 3, squashID: "yellowbounce-squash" });
    tl.from("#yellowchangingsphere", { y: -800, x: 600, ease: "yellowbounce", duration: 6 })
        .to("#yellowchangingsphere", { scaleY: 0.3, scaleX: 1.5, ease: "yellowbounce-squash", transformOrigin: "bottom", duration: 6 }, 0);
    // .to("#yellowchangingsphere", { x: 500, delay: -4.5 });
    // .from("#yellowchangingsphere", { y: 500, duration: 6 });

    // .to("#yellowchangingsphere", { y: -800, x: 600, ease: "yellowbounce", duration: 6 })
    // .to("#yellowchangingsphere", { scaleY: 0.3, scaleX: 1.5, ease: "yellowbounce-squash", transformOrigin: "bottom", duration: 6 });

    return tl;
}

// function backup() {
//     var tl = gsap.timeline();
//     CustomBounce.create("yellowbounce", { strength: 0.1, squash: 3, squashID: "yellowbounce-squash", endAtStart: true });
//     tl.from("#yellowchangingsphere", { y: -800, x: 900, ease: "yellowbounce", duration: 6 })
//         .to("#yellowchangingsphere", { scaleY: 0.3, scaleX: 1.5, ease: "yellowbounce-squash", transformOrigin: "bottom", duration: 6 }, 0)




//     return tl;
// }
function shadow() {
    var tl = gsap.timeline();
    tl.from("#shadows", { opacity: 0 })
        .to("#yellowchangingsphere", { rotate: 360, x: 500, duration: 3, transformOrigin: "center" })
        .to("#shadows", { rotate: 360, x: 500, duration: 3, delay: -3, transformOrigin: "top" })
        .from("#curvestroke", { drawSVG: "0.100", duration: 3 })
        .from("#curve", { opacity: 0 });
    return tl;
}
function pathbounce() {
    var tl = gsap.timeline();
    tl.from("#docS", { opacity: 0, duration: .3 })
        .to("#docS", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath1", align: "#bouncepath1" } })
        .from("#docN", { opacity: 0, duration: .3, delay: -1 })
        .to("#docN", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath2", align: "#bouncepath2" } })
        .from("#docE", { opacity: 0, duration: .3, delay: -1 })
        .to("#docE", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath3", align: "#bouncepath3" } })
        .from("#docT", { opacity: 0, duration: .3, delay: -1 })
        .from("#docT", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath4", align: "#bouncepath4" } })
        .from("#docR", { opacity: 0, duration: .3, delay: -1 })
        .from("#docR", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath5", align: "#bouncepath5" } })
        .from("#docA", { opacity: 0, duration: .3, delay: -1 })
        .from("#docA", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath6", align: "#bouncepath6" } })
        .from("#docM", { opacity: 0, duration: .3, delay: -1 })
        .from("#docM", { duration: 1, transformOrigin: "center", motionPath: { path: "#bouncepath7", align: "#bouncepath7" } })
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