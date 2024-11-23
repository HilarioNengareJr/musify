/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';


/**
 * Search clear functionality
 */

const /** {HTMLElement} */ $searchField = document.querySelector('[data-search-field]');
const /** {HTMLElement} */ $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', function () {
    $searchField.value = '';
});

/**
 * Logo animation in mobile
 */

const $logo = document.querySelector('[data-logo]');

if (!sessionStorage.getItem('logoAnimated')) {
    $logo.classList.add('animate');
    sessionStorage.setItem('logoAnimated', true);
}

/**
 * Menu toggle
 */

const /** {HTMLElement} */ $menuWrapper = document.querySelector('[data-menu-wrapper]');
const /** {HTMLElement} */ $menuToggler = document.querySelector('[data-menu-toggler]');

$menuWrapper?.addEventListener('click', function () {
    console.log('Toggler clicked!');
    $menuWrapper?.classList.toggle('active');
    console.log("CLICKED MENU TOGGLER");
});

/**
 * Hide top bar on scroll down
 */

const /** {HTMLElement} */ $page = document.querySelector('[data-page]');
let /** {number} */ lastScrollPos =  0;

$page?.addEventListener('scroll', function(){
    if(lastScrollPos < this.scrollTop){
        this.classList.add('header-hide');
    }
    else {
        this.classList.remove('header-hide');
    }
    lastScrollPos = this.scrollTop;
});

/**
 * Ripple effect
 */

const ripple = function($rippleElem){
    $rippleElem.addEventListener('pointerdown', function(event){
        event.stopImmediatePropagation();

        const /** {HTMLElement} */ $ripple = document.createElement('div');

        $ripple.classList.add('ripple');

        this.appendChild($ripple);

        const removeRipple = () => {
            $ripple.animate({
                opacity: 0
            },
        {
            fill: 'forwards',
            duration: 200
        });

        setTimeout(() => {
            $ripple.remove()
        }, 1000);
        }

        this.addEventListener('pointerup', removeRipple);
        this.addEventListener('pointerleave', removeRipple);

        const rippleSize = Math.max(this.clientWidth, this.clientHeight);

        $ripple.style.top = `${event.layerY}px`;
        $ripple.style.left = `${event.layerX}px`;
        $ripple.style.width = `${rippleSize}px`;
        $ripple.style.height = `${rippleSize}px`;
    });
}

const /** {HTMLElement} */ $rippleElems = document.querySelectorAll('[data-ripple]');
$rippleElems?.forEach(item => ripple(item));

