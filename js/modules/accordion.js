
/** accordion */

export default function accordion() {
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