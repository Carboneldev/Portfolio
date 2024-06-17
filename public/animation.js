document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline();
  tl.from('.header-container', { opacity: 0, y: -50, duration: 1 })
    .from('.banner-content img', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
    .from('.banner-content h1', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
    .from('.banner-content h2', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
    .from('.banner-content .social a', { opacity: 0, y: -50, duration: 1, stagger: 0.2, immediateRender: false }, '-=0.5')
    .from('.swiper', { opacity: 0, y: 50, duration: 1 }, '>-0.5')
    .from('footer', { opacity: 0, y: 50, duration: 1 }, '>-0.5');

  gsap.utils.toArray('.section-content').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });

  ScrollTrigger.create({
    trigger: 'footer',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    onEnter: () => {
      gsap.fromTo('footer', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  });

  gsap.to(".text-animation", {
    text: "Hello. My name is Natalia. I'm web-developer.",
    duration: 2,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".text-animation",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "restart pause resume pause",
      onEnter: () => {
        gsap.to(".text-animation", {opacity: 1}); 
      }
    }
  });
});
