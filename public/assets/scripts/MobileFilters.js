export default class MobileFilters {

    constructor(el) {
        this._el = el;
        this._elOpenFilterBtn = document.getElementById('fa-bars-filter');
        this._elCloseFilterBtn = document.getElementById('closeFilterBtn');
        
        this.init();
    }

    /**
     * Set the initial behaviors.
     */
    init() {
        /* Open when someone clicks on the span element */
        this._elOpenFilterBtn.addEventListener('click', () => {
            this._el.classList.add('show-filter-mobile');
        })

        /* Close when someone clicks on the "x" symbol inside the overlay */
       this._elCloseFilterBtn.addEventListener('click', () => {
            this._el.classList.remove('show-filter-mobile');
        })
    }

}