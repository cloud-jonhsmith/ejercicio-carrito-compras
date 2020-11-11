import React from 'react';
import Card from './card';

class SectionPageProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidadProduct: this.cantidadProduct,
            isStock: this.isStock
        }
    }
    render() {
        const rows = [];
        let lastNameProduct = null;

        this.props.products.forEach(product => {
            if (product.nameProduct !== lastNameProduct) {
                rows.push(
                    <Card 
                    product={product} 
                    cantidadProduct={this.cantidadProduct}
                    isStock={this.isStock} />
                );
            };
            lastNameProduct = product.nameProduct;
        });

        return (
            <section className="section-page-product">
                {rows}
            </section>
        )
    }
}

export default SectionPageProduct;