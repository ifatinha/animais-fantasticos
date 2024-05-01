export default function initCountAnimals() {
   const sectionNumeros = document.querySelector(".numbers");
   const numeros = document.querySelectorAll("[data-numero]");

   function animaNumeros() {
      numeros.forEach((numero) => {
         const total = +numero.innerText;
         const incremento = Math.floor(total / 100);

         let start = 0;

         const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;

            if (start > total) {
               numero.innerText = total;
               clearInterval(timer);
            }

         }, 25 * Math.random());

      })
   }

   function handleMutation(mutation) {
      if (mutation[0].target.classList.contains('anima-scroll')) {
         observer.disconnect();
         animaNumeros();
      }
   }

   const observer = new MutationObserver(handleMutation);
   observer.observe(sectionNumeros, { attributes: true });

}