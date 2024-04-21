import smoothScroll from './modules/scroll-smooth.js';
import animationScroll from './modules/scroll-animated.js';
import accordion from './modules/accordion.js';
import tabNavigation from './modules/tab-navigation.js';

(() => {
   tabNavigation();
   smoothScroll();
   animationScroll();
   accordion();
})();