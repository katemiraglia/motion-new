import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper, MotionPathPlugin);





function redpath2() {
    var tl = gsap.timeline();
    tl.set("#bothclipandshapered", { xPercent: -50, yPercent: -50 })
        .from("#bothclipandshapered", { delay: 1.2, duration: 3.8, scale: .015, transformOrigin: "center", motionPath: { path: "#newredpath", align: "#newredpath", alignOrigin: "center" } })
        .to("#bothclipandshapered", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
        .to("#clipI", { duration: 2, scaleY: 10, transformOrigin: "center", delay: -1.5 });

    // .set("#bothclipandshapeyellow", { xPercent: -50, yPercent: -50 })
    // .from("#bothclipandshapeyellow", { duration: 5, scale: .015, transformOrigin: "center", motionPath: { path: "#newyellowpath", align: "#newyellowpath", alignOrigin: "center" } })
    // .to("#bothclipandshapeyellow", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
    // .to("#ClipX", { duration: 2, scale: 4, transformOrigin: "center", delay: -1.5 });

    return tl;
}

function yellowpath() {
    var tl = gsap.timeline();
    tl.set("#bothclipandshapeyellow", { xPercent: -50, yPercent: -50 })
        .from("#bothclipandshapeyellow", { delay: .4, duration: 4.6, scale: .015, transformOrigin: "center", motionPath: { path: "#newyellowpath", align: "#newyellowpath", alignOrigin: "center" } })
        .to("#bothclipandshapeyellow", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
        .to("#ClipX", { duration: 2, scale: 4, transformOrigin: "center", delay: -1.5 });

    // .set("#allgreentogther", { xPercent: -50, yPercent: -50 })
    // .from("#allgreentogther", { duration: 5, scale: .015, transformOrigin: "center", motionPath: { path: "#greenpath", align: "#greenpath", alignOrigin: "center" } })
    // .to("#bothclipandshapegreen", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
    // .to("#clipgreen", { duration: 2, scale: 4, transformOrigin: "center", delay: -1.5 })
    return tl;
}
function greenpath() {
    var tl = gsap.timeline();
    tl.set("#allgreentogther", { xPercent: -50, yPercent: -50 })
        .from("#allgreentogther", { delay: .8, duration: 4.2, scale: .015, transformOrigin: "center", motionPath: { path: "#greenpath", align: "#greenpath", alignOrigin: "center" } })
        .to("#bothclipandshapegreen", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
        .to("#clipgreen", { duration: 2, scale: 4, transformOrigin: "center", delay: -1.5 });
    return tl;
}
function bluepath() {
    var tl = gsap.timeline();
    tl.set("#allbluetogether", { xPercent: -50, yPercent: -50 })
        .from("#allbluetogether", { duration: 4, scale: .0001, transformOrigin: "center", motionPath: { path: "#newbluepath", align: "#newbluepath", alignOrigin: "center" } })
        .to("#topblue", { opacity: 0, scale: .3, transformOrigin: "center", delay: -.5 })
        .to("#topblue", { opacity: 0 })
        .to("#clipblue", { duration: 2, scale: 7, transformOrigin: "center", delay: -1.5 });
    return tl;
}



function yellowswirl() {
    var tl = gsap.timeline();
    tl.from("#yellowbrandnew", { opacity: 0, delay: 2, duration: .1 })
        .fromTo("#yellowbrandnew", { drawSVG: "0 " }, { duration: .1, drawSVG: "0 5%" })
        .fromTo("#yellowbrandnew", { drawSVG: "0 5%" }, { drawSVG: "95% 100%", duration: 4 })
        .to("#yellowbrandnew", { opacity: 0, delay: -.7, duration: .1 });
    return tl;
}

function blueswirl() {
    var tl = gsap.timeline();
    tl.from("#bluebrandnew", { opacity: 0, delay: 2, duration: .1 })
        .fromTo("#bluebrandnew", { drawSVG: "0 " }, { duration: .1, drawSVG: "0 5%" })
        .fromTo("#bluebrandnew", { drawSVG: "0 5%" }, { drawSVG: "95% 100%", duration: 4 })
        .to("#bluebrandnew", { opacity: 0, delay: -.7, duration: .1 });
    return tl;
}

function circles() {
    var tl = gsap.timeline();
    tl.from("#circles", { scale: 7, transformOrigin: "bottom right", duration: 1.5 })
        .to("#circles", { scale: .001, transformOrigin: "bottom right", duration: .5 });
}




var mainTL = gsap.timeline();
mainTL.add(circles())
    .add(bluepath(), 1)
    .add(yellowpath(), 1)
    .add(greenpath(), 1)
    .add(redpath2(), 1)
    .add(blueswirl(), 1)
    .add(yellowswirl(), 1);



GSDevTools.create();
// MotionPathHelper.create("#newredpath");