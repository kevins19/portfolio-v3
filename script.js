document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    const chars = document.querySelectorAll(".name .char:not(.space)");
    const description = document.querySelector(".description");
    const socialIcons = document.querySelectorAll(".social-icons a");

    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(chars, {
        duration: 0.6,
        y: "0%",
        opacity: 1,
        ease: "power2.out",
        stagger: 0.05,
    });

    tl.to(description, {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.out",
    }, "-=0.8");

    tl.to(socialIcons, {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.out",
        stagger: 0.1,
    }, "-=0.8");
});
