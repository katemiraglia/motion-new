import {
    gsap
} from "gsap";



gsap.from("#first-line", {
    duration: 1.5,
    x: 200,
    alpha: 0

});
gsap.from("#second-line", {
    duration: 1.5,
    x: 200,
    alpha: 0

});
gsap.from("#view", {
    duration: 1.5,
    x: -200,
    alpha: 0

});