export default class Navigation {

    constructor() {
        this._elNav = document.querySelector('nav');
        this._elNavBtn = this._elNav.children[2].children[0];
        this._elMenu = this._elNav.querySelector('.menu');

        this.prevScrollPos = window.pageYOffset;
        
        
        this.init();
    }

    init() {

        this._elNavBtn.addEventListener('click', this.displayMobileNav.bind(this));

        window.onscroll = () => {
            this.hideNavBar();
        }
    }

    /**
     * Display the mobile navigation.
     */
    displayMobileNav() {
        this._elMenu.classList.toggle('show-nav');
    }

    /**
     * Hide nav bar when the user scroll down.
     */
    hideNavBar() {
        let currentScrollPos = window.pageYOffset;
        //si on scroll vers le haut
        if (this.prevScrollPos > currentScrollPos || currentScrollPos < 200) {
            this._elNav.style.top = "0";
        } 
        //si on scroll vers le bas
        else {
            this._elNav.style.top = "-80px";
        }
        this.prevScrollPos = currentScrollPos;
    }



}