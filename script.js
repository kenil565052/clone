const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageAnim(){
    var tl= gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
     .to(".boundingelem",{
        y: 0,
        ease:Expo.easeInOut,
        delay:-1,
        duration:1.5,
        
    })
     .from("#homefooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}
var timeout;
function circleskew(){
    var xscale = 1;
    var yscale = 1;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove" , function(dets){
        clearTimeout(timeout);
        
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
       
        xprev = dets.clientX;
        yprev = dets.clientY;     

       circlemousefollower(xscale,yscale);
       timeout = setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1,1)`;

       },100);

    })
}
circleskew();

function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale},${yscale})`;
    })
}
circlemousefollower();
firstpageAnim();


document.querySelectorAll(".element")
.forEach(function(element){
    element.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - element.getBoundingClientRect().top
        gsap.to(element.querySelector("img"),{
           opacity: 1,
           ease: Power1,
           top:diff,
           left:dets.clientX
           
           
        })
    })
});
 