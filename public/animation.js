


gsap.registerPlugin(ScrollTrigger);




gsap.set('.choppedcarrots', {xPercent:-225, autoAlpha: 0})
gsap.set('.toast', {xPercent: 250, autoAlpha: 1})

var controller = new ScrollMagic.Controller();

var bottomEnd = 0.35 * innerHeight;

const tween = gsap.timeline({
    scrollTrigger: {
        trigger: "#kitchen",
        pin:true,
        start: "top top",
        end: "+=1000",
        scrub:true,
      }
}).add('start')

tween.to('.choppedcarrots', {
    autoAlpha:1, 
    y:0, 
    duration:3, 
    stagger:1,
    xPercent: 5,
    yPercent: 50,
}, 'start');

tween.to('.toast', {
    autoAlpha: 1,
    duration: 7,
    y:0, 
    stagger:1,
    xPercent: 15,
    yPercent: -35,

}, 'start');

/*var scene = new ScrollMagic.Scene({
    triggerElement: '.choppedcarrots',
    duration: "50%",
    triggerHook: 0.25
})
.setTween(tween)
.addTo(controller);*/
