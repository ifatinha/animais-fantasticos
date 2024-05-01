import outsideClick from "./outside-click.js";
import userEvents from "./user-events.js";

export default function initMenuMobile() {

   const menuButton = document.querySelector("[data-menu='button']");
   const menuList = document.querySelector("[data-menu='list']");

   if (menuButton) {
      function openMenu(event) {
         menuList.classList.add('ativo');
         menuButton.classList.add('ativo');

         outsideClick(menuList, userEvents, () => {
            menuList.classList.remove('ativo');
            menuButton.classList.remove('ativo');
         })
      }

      userEvents.forEach((userEvent) => {
         menuButton.addEventListener(userEvent, openMenu);
      })
   }
}