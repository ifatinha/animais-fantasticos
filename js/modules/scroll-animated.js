/** animated scroll */

export default function animationScroll() {
   const sections = document.querySelectorAll("[data-anime='scroll']");

   if (sections.length) {
      const windowHalf = window.innerHeight * 0.6;

      function animaScroll() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowHalf) < 0;

            if (isSectionVisible) {
               section.classList.add("anima-scroll");
            } else if (section.classList.contains('anima-scroll')) {
               section.classList.remove('anima-scroll');
            }
         })
      }

      animaScroll();
      window.addEventListener("scroll", animaScroll);
   }
}