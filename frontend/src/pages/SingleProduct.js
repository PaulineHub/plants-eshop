import AccordionInformations from "../components/AccordionInformations";
import ProductDescription from "../components/ProductDescription";
import ProductImages from "../components/ProductImages";
import ProductShoppingInfos from "../components/ProductShoppingInfos";
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  return (
    <section class="section container no-padding-mobile no-margin-tb-mobile">
        <div class="go-back-wrapper">
            <Link to="/products" class="black go-back-wrapper-a">
                <div class="btn-chevron tiny-chevron">
                    <i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i>
                </div>
            <div class="go-back-text">Retour</div>
            </Link>
        </div>
        <div class="product-description-wrapper">
            <ProductImages/>
            <div class="product-description-content-wrapper">
                <ProductDescription/>
                <ProductShoppingInfos/>
                <AccordionInformations/>
            </div>
        </div>
    </section>
  );
};
export default SingleProduct;
