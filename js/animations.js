/** navegação por tab */

function activeTab(tabContent, index) {
   
   const direction = tabContent[index].dataset.anime;

   tabContent.forEach((div) => {
      div.classList.remove('ativo');
   });

   tabContent[index].classList.add('ativo', direction);
}

function tabNavigation() {
   const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
   const tabContent = document.querySelectorAll("[data-tab='content'] .js-animal");

   if (tabMenu.length && tabContent.length) {
      tabContent[0].classList.add("ativo");

      tabMenu.forEach((item, index) => {
         item.addEventListener('click', () => {
            activeTab(tabContent, index);
         })
      })
   }
}

/** animated scroll */

function animationScroll() {
   const sections = document.querySelectorAll("[data-anime='scroll']");

   if (sections.length) {
      const windowHalf = window.innerHeight * 0.6;

      function animaScroll() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowHalf) < 0;

            if (isSectionVisible) {
               section.classList.add("anima-scroll");
            }
         })
      }

      animaScroll();
      window.addEventListener("scroll", animaScroll);
   }
}

/** accordion */

function accordion() {
   const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
   const openAccordionClass = "open-accordion";

   if (accordionList.length) {
      accordionList[0].nextElementSibling.classList.add(openAccordionClass);

      function openAccordion() {
         this.classList.toggle(openAccordionClass);
         this.nextElementSibling.classList.toggle(openAccordionClass);
      }

      accordionList.forEach((accordion) => {
         accordion.addEventListener("click", openAccordion);
      })

   }
}

/** scroll suave */
function smoothScroll() {
   const linksInternos = document.querySelectorAll("[data-menu='smooth'] a[href^='#']");

   function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(`${href}`);

      section.scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   }

   linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
   })
}

(() => {
   tabNavigation();
   animationScroll();
   accordion();
   smoothScroll();
})();