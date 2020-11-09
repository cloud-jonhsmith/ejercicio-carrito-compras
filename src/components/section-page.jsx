import React from 'react';
import SectionPageProduct from './section-page-product';
import SectionPageHamper from './section-page-hamper';

class SectionPage extends React.Component {
    render() {
        const rowsProduct = [];
        this.props.products.forEach(product => {
            rowsProduct.push(
                product
            );
        });
        return (
            <div className="section-page">
                <SectionPageProduct products={rowsProduct} />
                <SectionPageHamper />
            </div>
        );
    };
}

export default SectionPage;