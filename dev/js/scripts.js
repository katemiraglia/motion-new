import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion() {
    var tl = gsap.timeline();


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

    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());


GSDevTools.create();