document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const descriptionText = document.getElementById('descriptionText');
    const socialIcons = document.getElementById('socialIcons');
    const socialIconLinks = socialIcons.querySelectorAll('a');

    gsap.set(name, { opacity: 0, y: 0 });
    gsap.to(name, {
        duration: 2,
        opacity: 1,
        x: 0, 
        delay: 0.2,
        ease: 'power2.out'
    });
    gsap.set(descriptionText, { opacity: 0, x: -10 }); 
    gsap.to(descriptionText, {
        duration: 1.3,
        opacity: 1,
        x: 0, 
        delay: 0.4,
        ease: 'power2.out'
    });

    gsap.set(socialIconLinks, { opacity: 0, y: 20 });
    
    socialIconLinks.forEach((icon, index) => {
        gsap.to(icon, {
            y: 0,
            opacity: 1,
            duration: .5,
            delay: 0.6 + (index * 0.1),
            ease: 'power2.out'
        });
    });
    
});