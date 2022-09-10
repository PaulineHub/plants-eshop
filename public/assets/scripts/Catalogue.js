export default class Catalogue {

    constructor() {
        this._elProductsContainer = document.querySelector('.products-list');
        this._elItemTemplate = document.querySelector('[data-js-item-template]');

        this.displayItems();
    }

    async displayItems() {
        try {
            const {data} = await axios.get('/api/v1/products');
            console.log(data.products[0]);
            data.products.forEach((product) => {
                this.createItem(product);
            })
            

        } catch (error) {
            console.log(error);
        }
    }

    createItem(item) {
        let infos = {
                id: item._id,
                title: item.name,
                image: item.image,
                category: item.category,
                price: item.price
            }
            // Construit un clone du template
            let elItemTemplateClone = this._elItemTemplate.cloneNode(true);

            for (const cle in infos) {
                let regExp = new RegExp(`{{${cle}}}`, 'g');
                elItemTemplateClone.innerHTML = elItemTemplateClone.innerHTML.replace(regExp, infos[cle])
            }

            let newElItem = document.importNode(elItemTemplateClone.content, true);
            this._elProductsContainer.append(newElItem);
    }
}