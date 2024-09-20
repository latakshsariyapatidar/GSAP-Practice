let timeLine = gsap.timeline();

timeLine.from("#navigation-left", {
    y: "-100%",
    duration: 0.4,
    opacity : 0,
    delay:0.2
})

timeLine.from("#navigation-right a", {
    y: "-100%",
    duration: 0.4,
    opacity : 0,
    stagger : 0.2
})

