import outsideClick from "./outside-click.js";
import userEvents from "./user-events.js";

export default function initDropdownMenu() {
   const dropdownMenus = document.querySelectorAll("[data-dropdown]");

   dropdownMenus.forEach((menu) => {
      userEvents.forEach((userEvent) => {
         menu.addEventListener(userEvent, handleClick);
      })
   });

   function handleClick(event) {
      event.preventDefault();
      this.classList.toggle('ativo');

      outsideClick(this, userEvents, () => {
         this.classList.remove('ativo');
      });
   }
}