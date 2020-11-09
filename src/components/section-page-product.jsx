import React from 'react';
import ArticleProduct from './article-product';

class SectionPageProduct extends React.Component {

    render() {
        const rows = [];
        let lastNameProduct = null;

        this.props.products.forEach(product => {
            if (product.nameProduct !== lastNameProduct) {
                rows.push(
                    <ArticleProduct product={product} />
                );
            };
            console.log(product.nameProduct);
            console.log(product.stock);
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