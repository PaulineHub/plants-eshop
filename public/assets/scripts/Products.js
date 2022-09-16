export default class Products {

    constructor(params) {
        this.params = params;
        this._elProductsContainer = document.querySelector('.products-list');
        this._elItemTemplate = document.querySelector('[data-js-item-template]');

        this.requestGetApi(this.params)
    }

    async requestGetApi(params) {
        try {
            const {data} = await axios.get(`/api/v1/products`, { params });
            // display products
            this.clearProducts(this._elProductsContainer);
            data.products.forEach(product => {
                this.createProduct(product);
            })
        } catch (error) {
            console.log(error);
        }
    }

    createProduct(item) {
        let infos = {
                id: item._id,
                title: item.name,
                image: item.image,
                category: item.category,
                price: item.price
            }
            let elItemTemplateClone = this._elItemTemplate.cloneNode(true);

            for (const cle in infos) {
                let regExp = new RegExp(`{{${cle}}}`, 'g');
                elItemTemplateClone.innerHTML = elItemTemplateClone.innerHTML.replace(regExp, infos[cle])
            }

            let newElItem = document.importNode(elItemTemplateClone.content, true);
            this._elProductsContainer.append(newElItem);
    }

    clearProducts(container) {
        container.innerHTML = '';
    }


}