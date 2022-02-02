gsap.from('.header',{duration : 1, y:'-100%', ease:'power2.out',opacity:0,})

gsap.from('.botle', {duration : 2, opacity: 0, delay: 0, stagger: .4})

gsap.from('.hero-content',{duration : .6, y:'-40', ease:'power2.out',opacity:0,delay:1.5})

// gsap.from('.lullu',{duration : 1, y:'-100%', ease:'bounce'})

gsap.from('.illustration',{duration : .6, ease:'power2.out',opacity:0,delay:1.8})

gsap.from('.aman',{duration: 1.5, ease:'power2.out',opacity:0, x:'-100%',delay:2.2})

// gsap.from('.span-2,',{duration: 1, ease:'power2.out',opacity:0, x:'100%',delay:1.6})

gsap.to("#red-car",{
    duration:10,
    x: 1960,
    y: 439,
    ease: "none",
    repeat: Infinity,
    repeatDelay: 2,
    

})

gsap.to("#blue-car",{
    duration: 12,
    x: 550,
    y: 180,
    ease: "none",
    repeat: Infinity,
    repeatDelay: 0,
    opacity:0.01,
   
    

})

gsap.to("#yellow-car",{
    duration: 7,
    x: 884,
    y: 1114,
    ease: "none",
    repeat: Infinity,
    repeatDelay: 2,

})


gsap.from('.btn-1',{duration : .6, x:'-40', ease:'power2.out',opacity:0,delay:2})

gsap.from('.btn-2',{duration : .6, x:'40', ease:'power2.out',opacity:0,delay:2})