var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
tl.from("#line-1 h5, .line h2", {
    opacity: 0,
    onStart: ()=> {
        var h5timer = document.querySelector("#line-1 h5")
        var grow = 0;

        setInterval(function() {
            if(grow< 100)
                h5timer.innerHTML = grow++
            else 
                h5timer.innerHTML = grow
        }, 20)
    }
})
tl.to(".line h2", {
    opacity: 0,
    duration: 0.2,
})
tl.to(".loader", {
    opacity: 0,
    duration: 0.35,
    delay: 2.5
})
tl.from("#page-1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power3
})
tl.to(".loader", {
    display: "none"
})