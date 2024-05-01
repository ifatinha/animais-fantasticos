import smoothScroll from './modules/scroll-smooth.js';
import animationScroll from './modules/scroll-animated.js';
import accordion from './modules/accordion.js';
import tabNavigation from './modules/tab-navigation.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initCountAnimals from './modules/numero-animais.js';

(() => {
   tabNavigation();
   smoothScroll();
   animationScroll();
   accordion();
   initModal();
   initTooltip();
   initDropdownMenu();
   initMenuMobile();
   initCountAnimals();
})();