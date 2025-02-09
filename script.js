function toggleNavBar() {
    const navBar = document.querySelector('.nav-bar');
    const hamburger = document.querySelector('.hamburger');
    navBar.classList.toggle('show');
    hamburger.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navBar = document.querySelector('.nav-bar');
    const hamburger = document.querySelector('.hamburger');
    const isClickInsideNavBar = navBar.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    if (!isClickInsideNavBar && !isClickInsideHamburger) {
        navBar.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const bio = document.getElementById("bio");
    const text = `Hey! I am Ashish, currently pursuing my passion for Artificial Intelligence and Machine Learning as a first-year student. With a strong foundation in networking and cybersecurity, I aim to deepen my expertise in AI/ML, striving to become an innovative engineer in the field.

    Outside of tech, I am a scriptwriter and poet, blending creativity with my analytical mindset. My love for music has made me a dedicated pianist and guitarist, and I enjoy immersing myself in fiction. Exploring new places fuels my curiosity, broadening my perspective in both life and technology.

    Always eager to learn and grow, I’m excited to connect with professionals, share ideas, and collaborate on projects that push the boundaries of AI/ML.

    Let’s work together!`;
    const typedText = document.getElementById("typed-text");
  
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        typedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
  
    typeWriter();
});
