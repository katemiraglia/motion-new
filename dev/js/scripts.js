import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion() {
    var tl = gsap.timeline();
    tl.from("#rightheart", { duration: 2, drawSVG: "0%" })
        .from("#leftheart", { duration: 2, drawSVG: "0%", delay: -2 })
        .from("#line", { duration: 2, drawSVG: "0%", stroke: "#E41F1F" })
        .to("#leftheart", { duration: 1, rotate: -45, transformOrigin: "bottom right" })
        .to("#rightheart", { duration: 1, rotate: 45, transformOrigin: "bottom left" })
        .to("#line", { duration: .5, drawSVG: "0%", stroke: "#E41F1F", delay: -1 })
        .to("#leftheart", { duration: .5, drawSVG: "0%", stroke: "#E41F1F" })
        .to("#rightheart", { duration: .5, drawSVG: "0%", stroke: "#E41F1F" });

    return tl;
}
function patternMotion() {
    var tl = gsap.timeline();
    tl.from(".a", { duration: .5, drawSVG: "0%" })
        .from(".b", { duration: .5, drawSVG: "0%" })
        .from(".c", { duration: .5, drawSVG: "0%" })
        .from(".d", { duration: .5, drawSVG: "0%" })
        .from(".e", { duration: .5, drawSVG: "0%" })
        .from("#circle", { duration: 2, drawSVG: "0%" })
        .from("#frame9", { duration: 2, rotate: 360, transformOrigin: "center" });
    return tl;
}
function UIMotion() {
    var tl = gsap.timeline();
    tl.to("#bottle", { duration: 6, x: 657 })
        .from("#mustard", { duration: 6, drawSVG: "0%", delay: -6 });
    return tl;
}
function UISecond() {
    var tl = gsap.timeline();
    tl.from("#circleout", { duration: 4, drawSVG: "0%", repeat: -1, transformOrigin: "center left" })
        .from(".ring", { duration: .5, drawSVG: "0%", delay: -3.5, stagger: 0.25, transformOrigin: "top right", repeat: -1 })
        .from("#heart", { duration: .3, scale: 1.09, fill: "#D01010", repeat: -1, yoyo: "true", transformOrigin: "center center", delay: -.5 })
        ;
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion())
    .add(UISecond());


GSDevTools.create();