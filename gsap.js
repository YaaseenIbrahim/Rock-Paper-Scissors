
gsap.to("header", {
    scrollTrigger: {
        trigger: "#header-container",
        start: "110% 35%",
        endTrigger: "header",
        end: "180% top",
        scrub: 0.5,
    },
    ease: 'power1',
    duration: 10,
    y: 225,
})
ScrollTrigger.create({
        trigger: '.homeTop',
        start: "69% top",
        toggleClass: {
            targets: "header",
            className: "scrolled",
        },
        endTrigger: ".gameSection",
        end: "bottom top"
    })



// const area = document.querySelector(".c");
// const sectionOneOptions = {
//     rootMargin: "-29% 0% 0% 0%"
// };

// const sectionOneObserver = new IntersectionObserver(function(entries,options){
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(area);