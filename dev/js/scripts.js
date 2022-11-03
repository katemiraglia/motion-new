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
    tl.from(".odd", { duration: 2, drawSVG: 0, stagger: 0.25, rotate: 180, transformOrigin: "center" })
        .fromTo(".even", { drawSVG: "0% 0%" }, { duration: 2, drawSVG: "0% -100%", stagger: 0.25, rotate: 180, transformOrigin: "center" }, "spin");
    return tl;
}
function UIMotion() {
    var tl = gsap.timeline();
    tl.to("#bottle", { duration: 6, x: 657 })
        .from("#mustard", { duration: 6, drawSVG: "0%", delay: -6 });
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());


GSDevTools.create();