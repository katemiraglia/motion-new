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
        .from("#bothclipandshapered", { duration: 5, scale: .015, transformOrigin: "center", motionPath: { path: "#newredpath", align: "#newredpath", alignOrigin: "center" } })
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
        .from("#bothclipandshapeyellow", { duration: 5, scale: .015, transformOrigin: "center", motionPath: { path: "#newyellowpath", align: "#newyellowpath", alignOrigin: "center" } })
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
        .from("#allgreentogther", { duration: 5, scale: .015, transformOrigin: "center", motionPath: { path: "#greenpath", align: "#greenpath", alignOrigin: "center" } })
        .to("#bothclipandshapegreen", { duration: 3.5, rotate: 360, transformOrigin: "center", delay: -5 })
        .to("#clipgreen", { duration: 2, scale: 4, transformOrigin: "center", delay: -1.5 });
    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(yellowpath(), 0)
    .add(greenpath(), 0)
    .add(redpath2(), 0);


GSDevTools.create();
// MotionPathHelper.create("#newredpath");