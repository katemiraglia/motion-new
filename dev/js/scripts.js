import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



function bluepath2() {
    var tl = gsap.timeline();
    tl.from("#smallbluecircle", { duration: 6, motionPath: { path: "#bluepath", align: "#bluepath" } });


    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(bluepath2());


GSDevTools.create();