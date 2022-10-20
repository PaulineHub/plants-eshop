export default class LocalStorage {

    /**
     * Add an item to the local storage.
     * If it already exists, update the quantity.
     * @param {object} item
     */
    addToLocalStorage(item){
        let items = this.getLocalStorage();
        let isUpdate = false;
        items.forEach( product => {
            if (product.id === item.id) {
                product.quant = parseInt(product.quant) + parseInt(item.quant);
                isUpdate = true;
            }
        })
        if (!isUpdate) items.push(item);
        localStorage.setItem('shoppingList', JSON.stringify(items));
    }

    /**
     * Get item's infos from the local storage or an empty array if no items
     * @return {array} 
     */
    getLocalStorage(){
        return localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : [];
    }


}