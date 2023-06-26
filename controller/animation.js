$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: 'searchbarfood'
    })
    .setClassToggle('#searchbarfood', 'fade-in')
    .addTo(controller);

});