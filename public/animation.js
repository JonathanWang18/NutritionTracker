


gsap.registerPlugin(ScrollTrigger);




gsap.set('.choppedcarrots', {xPercent:-225, autoAlpha: 0})

var controller = new ScrollMagic.Controller();

var bottomEnd = 0.35 * innerHeight;

var tween = gsap.timeline({
    scrollTrigger: {
        trigger: "#kitchen",
        pin:true,
        start: "top top",
        end: "+=1000",
        scrub:true,
      }
})
.to('.choppedcarrots', {
    autoAlpha:1, 
    y:0, 
    duration:2, 
    stagger:1,
    xPercent: 5,
})

/*var scene = new ScrollMagic.Scene({
    triggerElement: '.choppedcarrots',
    duration: "50%",
    triggerHook: 0.25
})
.setTween(tween)
.addTo(controller);*/
