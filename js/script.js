/** navegação por tabs **/
function tabNavigation() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent .js-animal");

    if (tabContent.length && tabMenu.length) {
        tabContent[0].classList.add("ativo");

        function activeTab(index) {

            tabContent.forEach((content) => {
                content.classList.remove("ativo");
            });

            tabContent[index].classList.add("ativo");
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}

/** accordion */
function accordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const ativeClass = "open-accordion";

    if (accordionList.length) {
        accordionList[0].classList.add(ativeClass);
        accordionList[0].nextElementSibling.classList.add(ativeClass);

        function openAccordion() {
            this.classList.toggle(ativeClass);
            this.nextElementSibling.classList.toggle(ativeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', openAccordion);
        })
    }
}

/** scroll suave */
function scrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

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
    accordion();
    scrollSuave();
})();