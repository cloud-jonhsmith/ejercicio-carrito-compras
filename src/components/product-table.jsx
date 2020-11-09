import React from 'react';
import HeaderMenu from './header-menu';
import SectionPage from './section-page';

class ProductTable extends React.Component {
    /* constructor(props) {
        super(props);
    } */
    render() {
        const rowsProduct = [];
        this.props.products.forEach(product => {
            rowsProduct.push(
                product,
            );
        });
        return (
            <div className='app'>
                <HeaderMenu />
                <SectionPage products={rowsProduct} />
            </div>
        );
    };
}

export default ProductTable;