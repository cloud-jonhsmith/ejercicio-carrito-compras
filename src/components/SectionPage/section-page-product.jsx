import React from 'react';
import { PRODUCTS } from '../data';
import Card from '../card';

const SectionPageProduct = (props) => (
    <section className="section-page-product">
        {
            PRODUCTS.map((obj, index) =>
                <Card
                    key={index}
                    product={obj}
                    addProductsHamper={props.addProductsHamper}
                />
            )
        }
    </section>
)

export default SectionPageProduct;