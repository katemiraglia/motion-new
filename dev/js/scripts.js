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
    tl.from("#circleout", { duration: .66, drawSVG: "0%", repeat: -1, transformOrigin: "center left" })
        .from("#a", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#b", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#c", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#d", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#e", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#f", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#g", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#h", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#i", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#j", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#k", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#l", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#m", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#n", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#o", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#p", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#q", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#r", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#s", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#v", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#t", { duration: .3, drawSVG: "0%", delay: -.66 })
        .from("#u", { duration: .3, drawSVG: "0%", delay: -.66 })

        .from("#heart", { duration: .3, scale: 1.09, fill: "#D01010", repeat: -1, yoyo: "true", transformOrigin: "center center" })


        ;
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion())
    .add(UISecond());


GSDevTools.create();