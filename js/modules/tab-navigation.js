/** navegação por tab */

function activeTab(tabContent, index) {
   
   const direction = tabContent[index].dataset.anime;

   tabContent.forEach((div) => {
      div.classList.remove('ativo');
   });

   tabContent[index].classList.add('ativo', direction);
}

export default function tabNavigation() {
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