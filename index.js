const body = document.querySelector('#body');

/* Under denna skärmstorlek så ska mobil-menyn visas */
const mobileBreakpoint = 768;

if (window.innerWidth < mobileBreakpoint) {
    /* Under breakpoint togglas en klass i body som 
     talar om för css att menyn ska visas */
    body.classList.add('mobile-menu-show');
} else {
    /* Över breakpoint tar vi bort klassen */
    body.classList.remove('mobile-menu-show');
}


/* Stäng menyn om skärmstorleken ökar över breakpointen */
window.addEventListener('resize', () => {
    if (window.innerWidth >= mobileBreakpoint) {
        body.classList.remove('mobile-menu-show');
    } else {
        body.classList.add('mobile-menu-show');
    }
});