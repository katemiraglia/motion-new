import {
    gsap
} from "gsap";




function carheroanimation() {
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        // desktop setup code here...
        tl.from("#first-line", {
                duration: 1.5,
                x: 200,
                alpha: 0

            }, "startani")
            .from("#second-line", {
                duration: 1.5,
                x: 200,
                alpha: 0

            }, "startani")
            .from("#view", {
                duration: 1.5,
                x: -200,
                alpha: 0,

            }, "startani");
    });

    mm.add("(max-width: 767px)", () => {
        // mobile setup code here...
        tl.from("#first-line", {
                duration: 1.5,
                y: 150,
                alpha: 0

            }, "startani")
            .from("#second-line", {
                duration: 1.5,
                y: 150,
                alpha: 0

            }, "startani")
            .from("#view", {
                duration: 1.5,
                y: -150,
                alpha: 0,

            }, "startani");
    });


    return tl;

}

// carheroanimation();

var mainTL = gsap.timeline();
mainTL.add(carheroanimation());