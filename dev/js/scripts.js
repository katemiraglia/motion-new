import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper, MotionPathPlugin);





function bluepath2() {
    var tl = gsap.timeline();
    tl.to("#evensmallerblue", { scale: 48, duration: 1, transformOrigin: "center", motionPath: { path: "#bluepath", align: "#bluepath" } })
        .to("#yellowsmallsquare", { scale: 6, duration: 1, transformOrigin: "center", motionPath: { path: "#yellowpath", align: "#yellowpath" } })
        .to("#smallgreencircle", { scale: 6, duration: 1, transformOrigin: "center", motionPath: { path: "#greenpath", align: "#greenpath" } })
        .to("#smallred", { scale: 6, duration: 1, transformOrigin: "center", motionPath: { path: "#redpath", align: "#redpath" } })

    // .to("#smallred", { scale: 6, duration: 6, motionPath: { path: "#redpath", align: "#redpath" } })
    // .to("#yellowsmallsquare", { scale: 6, duration: 6, motionPath: { path: "#yellowpath", align: "#yellowpath" } })
    // .to("#smallgreencircle", { scale: 6, duration: 6, motionPath: { path: "#greenpath", align: "#greenpath" } });

    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(bluepath2());


GSDevTools.create();