
export default class Carousel {

    constructor() {
        this._elCarouselCtn = document.getElementById('carousel-ctn');
        this._elWrapper = document.querySelector('[data-js-products-wrapper]');
        this._elProducts = document.querySelectorAll('[data-js-product]');
        this._elPrevBtns = document.querySelectorAll('[data-js-left]');
        this._elNextBtns = document.querySelectorAll('[data-js-right]');

        this.counter = 0;
        
        this.carouselTotalWidth = parseInt(window.getComputedStyle(this._elCarouselCtn).width, 10);
        this.percentage = 100;

        this.init();
    }
    
    /***
     * Initiate behaviors by default (event listeners when click on buttons next and previous)
     */
    init() {
        this._elNextBtns.forEach(elNextBtn => {
            elNextBtn.addEventListener('click', () => {    
                if (this.counter < this._elProducts.length - 1) { 
                    this.counter++;
                    this.moveCarousel();
                };
            })
        })

        this._elPrevBtns.forEach(elPrevBtn => {
            elPrevBtn.addEventListener('click', () => {
                if (this.counter > 0) {
                    this.counter--;
                    this.moveCarousel();
                }
            });
        })
    }
    
    /**
     * Move the elements in the carousel horizontaly.
     */
    moveCarousel() {
        if (this.counter >= 0 && this.counter < this._elProducts.length) {
            const elProducts = this._elWrapper.querySelectorAll('[data-js-product]') 
            elProducts.forEach(elProduct => {
                elProduct.style.transform = `translateX(-${this.counter * this.percentage}%)`;
            })
        } else  {
            this.counter = 0;
        }
       
    }
}

