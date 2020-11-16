import React from 'react';
import SectionPageHamper from './section-page-hamper';
import SectionPageProduct from './section-page-product';

const Page = (props) => (
    <>
        <SectionPageProduct addProductsHamper={props.addProductsHamper} />
        <SectionPageHamper productsArray={props.productsArray} />
    </>
)

export default Page;