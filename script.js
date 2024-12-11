document.addEventListener('DOMContentLoaded', () => {
    const nameText = document.getElementById('nameText');
    const descriptionText = document.getElementById('descriptionText');
    const socialIcons = document.getElementById('socialIcons');
    const socialIconLinks = socialIcons.querySelectorAll('a');

    const text = `Hello! My name is Kevin--I'm an undergraduate Computer Science student at Georgia Tech. I'm broadly interested in systems programming, computer architecture, and high performance computing.

I've been doing competitive programming since high school, and have represented Georgia Tech in the ACM International Collegiate Programming Contest for the last few years. I am also currently researching CXL-memory pooling architectures for irregular graph applications as an undergraduate researcher at Georgia Tech.

This summer, I will be interning at Citadel as a Quantitative Developer intern in Chicago, where I will be working on the Algo/Execution team in the Global Quantitative Strategies branch of Citadel. 

You can also learn more about me through the links below, or contact me at [kshan9@gatech.edu].`;

    const name = "Kevin Shan";
    nameText.innerHTML = name.split('').map(char => 
        `<span class="name-char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const nameChars = document.querySelectorAll('.name-char');
    
    gsap.set(nameChars, { opacity: 0, y: 20 });
    
    nameChars.forEach((char, index) => {
        gsap.to(char, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: index * 0.05,
            ease: 'power1.out'
        });
    });

    descriptionText.textContent = text;
    gsap.set(descriptionText, { opacity: 0, y: 50 });
    gsap.to(descriptionText, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.3,
        ease: 'power2.out'
    });

    gsap.set(socialIconLinks, { opacity: 0, y: 20 });
    
    socialIconLinks.forEach((icon, index) => {
        gsap.to(icon, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.6 + (index * 0.1),
            ease: 'power1.out'
        });
    });
});