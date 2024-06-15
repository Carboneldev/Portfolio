// Загрузка GSAP и плагинов через CDN
const gsapScript = document.createElement('script');
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js";
document.head.appendChild(gsapScript);

gsapScript.onload = () => {
  const scrollTriggerScript = document.createElement('script');
  scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js";
  document.head.appendChild(scrollTriggerScript);

  const scrollToScript = document.createElement('script');
  scrollToScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js";
  document.head.appendChild(scrollToScript);

  const motionPathScript = document.createElement('script');
  motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/MotionPathPlugin.min.js";
  document.head.appendChild(motionPathScript);

  const textPluginScript = document.createElement('script');
  textPluginScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/TextPlugin.min.js";
  document.head.appendChild(textPluginScript);

  // После загрузки всех плагинов
  textPluginScript.onload = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

    // Анимация элементов главного экрана при загрузке страницы
    window.addEventListener('load', () => {
      gsap.timeline()
        .from('.header-container', { opacity: 0, y: -50, duration: 1 })
        .from('.banner-content img', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
        .from('.banner-content h1', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
        .from('.banner-content h2', { opacity: 0, y: -50, duration: 1 }, '-=0.5')
        .from('.banner-content .social a', { opacity: 0, y: -50, duration: 1, stagger: 0.2 }, '-=0.5')
        .from('.swiper', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
        .from('footer', { opacity: 0, y: 50, duration: 1 }, '-=0.5');
    });

    // Анимация элементов при скролле
    document.addEventListener('DOMContentLoaded', () => {
      gsap.utils.toArray('.section-content').forEach(section => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse', // Анимация при скролле вниз и вверх
          },
          opacity: 0,
          y: 50,
          duration: 1
        });
      });

      // Анимация футера при скролле
      gsap.from('footer', {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse', // Анимация при скролле вниз и вверх
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    });
  };
};