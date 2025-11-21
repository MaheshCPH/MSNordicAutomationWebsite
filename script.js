document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // HERO fade
  gsap.to("#hero-text", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0,
    y: -40
  });

  // Background zoom
  gsap.to("#bg-image", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      endTrigger: "#process",
      end: "top bottom",
      scrub: true
    },
    scale: 0.7,
    opacity: 0.4,
    ease: "none"
  });

  // Impact numbers reveal
  const statItems = gsap.utils.toArray('.stat-item');
  statItems.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: "#numbers",
        start: "top 60%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.2
    });
  });

  // Counter animation
  const stats = document.querySelectorAll('.counter');
  stats.forEach(stat => {
    const target = +stat.getAttribute('data-target');
    const isPercent = stat.innerText.includes('%');
    const isMultiplier = stat.innerText.includes('x');
    const suffix = isPercent ? '%' : (isMultiplier ? 'x' : '');

    ScrollTrigger.create({
      trigger: stat,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(stat, {
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          onUpdate: function() {
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
          }
        })
      }
    });
  });

});
